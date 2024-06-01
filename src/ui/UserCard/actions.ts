'use server'

import { cookies } from 'next/headers'

export async function getUser() {
  const cookieStore = cookies()
  const session = cookieStore.get('session')?.value

  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL

  const response = await fetch(`${baseUrl}/auth/users/me`, {
    headers: {
      Cookie: `session=${session}`,
    },
    credentials: 'include',
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message)
  }

  return response.json()
}
