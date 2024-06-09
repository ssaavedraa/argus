'use server'

import { redirect } from 'next/navigation'

interface RawFormData {
  name: FormDataEntryValue
  email: FormDataEntryValue
  password: FormDataEntryValue
}

export async function singupUser(
  state: any,
  formData: FormData,
): Promise<void | { error: string }> {
  const rawFormData: RawFormData = {
    name: formData.get('name') || '',
    email: formData.get('email') || '',
    password: formData.get('password') || '',
  }

  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL

  const response = await fetch(`${baseUrl}/cms/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(rawFormData),
  })

  const responseData: {
    status: number
    message: string
  } = await response.json()

  if (responseData?.status.toString().match(/\b(?:4\d{2}|5\d{2})\b/)) {
    return {
      ...state,
      error: responseData.message,
    }
  }

  if (responseData.status === 201) {
    const oneWeekFromNow = new Date()
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7)

    redirect('/auth/login')
  }
}
