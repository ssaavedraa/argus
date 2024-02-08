'use server'

import { cookies } from 'next/headers'

export async function getProductsData() {
  const cookieStore = cookies()
  const session_id = cookieStore.get('session_id')?.value

  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL

  const response = await fetch(`${baseUrl}/api/users/me`, {
    headers: {
      Authorization: `Bearer ${session_id}`,
      Cookie: `session_id=${session_id}`,
    },
    credentials: 'include',
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message)
  }

  return response.json()
}
