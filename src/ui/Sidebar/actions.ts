'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function logoutUser() {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL

  const response = await fetch(`${baseUrl}/cms/auth/logout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })

  if (!response.ok) {
    console.error('something went wrong')
  }

  if (response.ok) {
    cookies().delete('session_id')
    redirect('/')
  }
}
