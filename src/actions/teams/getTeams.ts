'use server'

import { hexFetch } from 'utils/hexFetch/hexFetch'

import { auth } from '@hex-auth'

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
