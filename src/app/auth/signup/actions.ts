'use server'

import { redirect } from 'next/navigation'

interface RawFormData {
  name: FormDataEntryValue
  email: FormDataEntryValue
  password: FormDataEntryValue
}

export async function singupUser(formData: FormData) {
  const rawFormData: RawFormData = {
    name: formData.get('name') || '',
    email: formData.get('email') || '',
    password: formData.get('password') || '',
  }

  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL

  const response = await fetch(`${baseUrl}/api/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(rawFormData),
  })

  const responseData: {
    code: number
    message: string
  } = await response.json()

  if (responseData?.code.toString().match(/\b(?:4\d{2}|5\d{2})\b/)) {
    console.error(responseData.message)
  }

  if (responseData.code === 201) {
    const oneWeekFromNow = new Date()
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7)

    redirect('/auth/login')
  }
}
