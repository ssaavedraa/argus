'use server'

import { Company } from '@hex-pages/signup/SignupInvite'

const apiUrl = process.env.API_DOMAIN

export const updateInvitedUserCompany = async (payload: Company) => {
  try {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000))
    const response = await fetch(`${apiUrl}/api/companies`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorResponse = await response.json()
      throw new Error(errorResponse.message)
    }
  } catch (error) {
    console.error('Error in updateInvitedUserCompany:', error)
    throw error
  }
}
