'use server'

import { hexFetch } from 'utils/hexFetch/hexFetch'

export const getUserById = async (userId: string) => {
  return await hexFetch(`api/users/${userId}`, 'GET')
}
