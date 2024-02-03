'use server'
const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export async function getData<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`)

    console.debug('🚀 ~ response:', response)
    return response.json()
  } catch (error) {
    console.error({ error })

    throw error
  }
}
