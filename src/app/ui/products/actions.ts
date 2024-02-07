'use server'

import { cookies } from 'next/headers'

export async function getProductsData() {
  const cookieStore = cookies()
  const session_id = cookieStore.get('session_id')?.value
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL

  const response = await fetch(`${baseUrl}/api/products`, {
    headers: {
      Authorization: `Bearer ${session_id}`,
    },
    credentials: 'include',
  })

  if (!response.ok) {
    throw new Error()
  }

  return response.json()
}
