'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function logoutUser() {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://hex.santiagosaavedra.com.co'

  const response = await fetch(`${baseUrl}/api/auth/logout`, {
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
