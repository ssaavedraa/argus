'use server'

import { cookies } from 'next/headers'

interface RawFormData {
  email: FormDataEntryValue
  password: FormDataEntryValue | null
}

export async function loginUser(
  state: any,
  formData: FormData,
): Promise<void | {
  message: string
  isSuccess: boolean
  isFailed: boolean
}> {
  try {
    const rawFormData: RawFormData = {
      email: (formData.get('email')?.toString() || '').toLowerCase(),
      password: formData.get('password'),
    }

    const baseUrl = process.env.NEXT_PUBLIC_AUTH_URL

    const response = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rawFormData),
      credentials: 'include',
    })

    const setCookies = response.headers.getSetCookie() || []

    const sessionCookie = setCookies
      .find((cookie) => cookie.includes('session'))
      ?.split('=')

    const responseData: {
      status: number
      message: string
    } = await response.json()

    if (response?.status?.toString().match(/\b(?:4\d{2}|5\d{2})\b/)) {
      return {
        ...state,
        message: responseData.message,
        isFailed: true,
        isSuccess: false,
      }
    }

    if (response.status === 201) {
      const oneWeekFromNow = new Date()
      oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7)

      if (sessionCookie) {
        cookies().set(sessionCookie[0], sessionCookie[1], {
          httpOnly: true,
          secure: true,
          sameSite: true,
          expires: oneWeekFromNow,
        })
      }

      return {
        ...state,
        message: responseData?.message,
        isFailed: false,
        isSuccess: true,
      }
    }
  } catch (error) {
    console.error(error)
  }
}
