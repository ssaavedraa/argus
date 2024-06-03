'use server'

import { cookies } from 'next/headers'
import { Product } from '../types'

export async function getProductsData(): Promise<Product[]> {
  const cookieStore = cookies()
  const session = cookieStore.get('session')?.value
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL

  const response = await fetch(`${baseUrl}/cms/products`, {
    headers: {
      Cookie: `session=${session}`,
    },
    credentials: 'include',
  })

  if (!response.ok) {
    // throw new Error()
    return []
  }

  return response.json()
}
