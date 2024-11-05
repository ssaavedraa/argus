'use server'

import { auth } from '@hex-auth'

import { hexFetch } from '@hex-utils/hexFetch'

export const getRoles = async () => {
  try {
    const session = await auth()

    return await hexFetch(
      `api/companies/${session?.user.companyId}/roles`,
      'GET',
    )
  } catch (error) {
    console.error('[ERROR]: ', error)

    throw error
  }
}
