'use server'

import { auth } from '@hex-auth'

import { delay } from '@hex-utils/delay'

const apiUrl = process.env.API_DOMAIN

export const getTeamMembers = async (teamName: string) => {
  try {
    const session = await auth()
    delay(3000)

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
