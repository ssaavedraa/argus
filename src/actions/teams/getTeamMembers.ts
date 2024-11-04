'use server'

import { auth } from '@hex-auth'

const apiUrl = process.env.API_DOMAIN

export const getTeamMembers = async (teamName: string) => {
  try {
    const session = await auth()

    const response = await fetch(
      `${apiUrl}/api/companies/${session?.user.companyId}/teams/${teamName}/members`,
    )

    const data = await response.json()

    return data
  } catch (error) {
    console.error('[ERROR]: ', error)

    throw error
  }
}
