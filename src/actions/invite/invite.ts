'use server'

import { AuthError } from 'next-auth'
// eslint-disable-next-line import/order
import { redirect } from 'next/navigation'

import { auth } from '@hex-auth'

const apiUrl = process.env.API_DOMAIN

export const invite = async (formData: FormData) => {
  const session = await auth()

  const invite = {
    fullname: formData.get('fullname'),
    companyName: formData.get('company-name'),
    email: formData.get('email'),
  }

  // TODO: validate fields and throw errors
  let inviteError: string | null = null
  try {
    await fetch(`${apiUrl}/api/users?method=hex-invite`, {
      method: 'POST',
      body: JSON.stringify(invite),
      credentials: 'include',
      headers: {
        Authentication: `Bearer ${session?.user.accessToken}`,
      },
    })
  } catch (error) {
    console.error('[ERROR]: ', error)
    if (error instanceof AuthError) {
      inviteError =
        error.cause?.err?.message ||
        'Something went wrong. Please try again later'
    }

    throw error
  } finally {
    if (!inviteError) {
      redirect(`/admin/invite`)
    } else {
      redirect(`/admin/invite?error=${inviteError}`)
    }
  }
}
