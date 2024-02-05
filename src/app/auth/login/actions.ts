'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

interface RawFormData {
  email: FormDataEntryValue
  password: FormDataEntryValue | null
}

export async function loginUser(formData: FormData): Promise<void> {
  const rawFormData: RawFormData = {
    email: (formData.get('email')?.toString() || '').toLowerCase(),
    password: formData.get('password'),
  }

  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://hex.santiagosaavedra.com.co'

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

  const responseData = await response.json()

  if (responseData.code === 400 || responseData.code === 400) {
    console.error(responseData.message)
  }

  if (responseData.code === 201) {
    const oneWeekFromNow = new Date()
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7)

    if (sessionCookie) {
      cookies().set(sessionCookie[0], sessionCookie[1], {
        httpOnly: true,
        secure: true,
        sameSite: true,
      })

      redirect('/admin/products')
    }
  }
}
