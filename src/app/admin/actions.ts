'use server'

import { redirect } from 'next/navigation'

export async function getUser() {
  // const cookieStore = cookies()
  // const session = cookieStore.get('session')?.value

  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL

  const response = await fetch(`${baseUrl}/cms/users/me`, {
    // headers: {
    //   Cookie: `session=${session}`,
    // },
    credentials: 'include',
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message)
  }

  return response.json()
}

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
    // cookies().delete('session_id')
    redirect('/')
  }
}
