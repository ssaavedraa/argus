'use server'

import { cookies } from 'next/headers'

export async function getUser() {
  const cookieStore = cookies()
  const session = cookieStore.get('session')?.value
  console.debug('🚀 ~ file: actions.ts:8 ~ getUser ~ session:', session)

  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL

  const response = await fetch(`${baseUrl}/cms/users/me`, {
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
