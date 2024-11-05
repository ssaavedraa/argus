'use server'

import { auth } from '@hex-auth'

import { hexFetch } from '@hex-utils/hexFetch'

export const getTeams = async () => {
  try {
    const session = await auth()

    return await hexFetch(
      `api/companies/${session?.user.companyId}/teams`,
      'GET',
    )
  } catch (error) {
    console.error('[ERROR]: ', error)

    throw error
  }
}
