'use server'

import { User } from '@hex-pages/signup/SignupInvite'

const apiUrl = process.env.API_DOMAIN

export const updateInvitedUser = async (payload: User) => {
  try {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000))
    const response = await fetch(`${apiUrl}/api/users`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorResponse = await response.json()
      throw new Error(errorResponse.message)
    }
  } catch (error) {
    console.error('Error in updateInvitedUser:', error)
    throw error
  }
}
