'use server'

import { hexFetch } from '@hex-utils/hexFetch'

export const getUserById = async (userId: string) => {
  return await hexFetch(`api/users/${userId}`, 'GET')
}
