'use server'

const apiUrl = process.env.API_DOMAIN

export const getInviteDetails = async (inviteId: string) => {
  try {
    const response = await fetch(`${apiUrl}/api/users/${inviteId}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.error('[ERROR]: ', error)

    throw error
  }
}
