const { BACKEND_URL } = process.env

export default class ApiService {
  public async getData<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products')

      const data: T = await response.json()

      return data
    } catch (error) {
      console.error({ error })
      return {} as T
    }
  }
}
