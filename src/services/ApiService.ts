const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL
export default class ApiService {
  public async getData<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${apiUrl}/${endpoint}`)

      const data: T = await response.json()

      return data
    } catch (error) {
      console.error({ error })

      throw error
    }
  }
}
