'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export async function Login(formData: FormData) {
  const rawFormData = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const response = await fetch(`${apiUrl}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(rawFormData),
    credentials: 'include',
  })

  const responseData = await response.json()

  if (responseData.code === 400 || responseData.code === 400) {
    console.error(responseData.message)
  }

  if (responseData.code === 201) {
    const oneWeekFromNow = new Date()
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7)

    cookies().set('session_id', responseData.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: true,
    })

    redirect('/admin/products')
  }
}
