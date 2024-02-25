'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

interface RawFormData {
  email: FormDataEntryValue
  password: FormDataEntryValue | null
}

export async function loginUser(
  state: any,
  formData: FormData,
): Promise<void | { error: string }> {
  const rawFormData: RawFormData = {
    email: (formData.get('email')?.toString() || '').toLowerCase(),
    password: formData.get('password'),
  }

  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL

  const response = await fetch(`${baseUrl}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(rawFormData),
    credentials: 'include',
  })

  const setCookies = response.headers.getSetCookie() || []
  const sessionCookie = setCookies
    .find((cookie) => cookie.includes('session_id'))
    ?.split('=')

  const responseData: {
    status: number
    message: string
  } = await response.json()

  if (responseData?.status?.toString().match(/\b(?:4\d{2}|5\d{2})\b/)) {
    return {
      ...state,
      error: responseData.message,
    }
  }

  if (responseData.status === 201) {
    const oneWeekFromNow = new Date()
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7)

    if (sessionCookie) {
      cookies().set(sessionCookie[0], sessionCookie[1], {
        httpOnly: true,
        secure: true,
        sameSite: true,
        expires: oneWeekFromNow,
      })

      redirect('/admin/products')
    }
  }
}
