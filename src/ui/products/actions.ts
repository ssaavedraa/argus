'use server'

export interface Product {
  id: number
  name: string
  price: number
  description: string
  imageUrl: string
}

import { cookies } from 'next/headers'

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
