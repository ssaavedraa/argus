'use server'

import { auth } from '@hex-auth'

const apiUrl = process.env.API_DOMAIN

export const getTeams = async () => {
  try {
    const session = await auth()

    const response = await fetch(
      `${apiUrl}/api/teams/${session?.user.companyId}`,
    )

    const data = await response.json()

    return data
  } catch (error) {
    console.error('[ERROR]: ', error)

    throw error
  }
}
