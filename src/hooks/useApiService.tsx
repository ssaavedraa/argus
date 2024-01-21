import { useEffect, useState } from 'react'
import { ApiRequestOptions, ApiResponse } from '../types'

export function useApiService<T>(
  url: string,
  { body, method }: ApiRequestOptions,
): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options: RequestInit = {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: body ? JSON.stringify(body) : null,
        }

        const response = await fetch(url, options)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const responseData = await response.json()

        setData(responseData)
      } catch (error) {
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url, method, body])

  return {
    data,
    error,
    isLoading,
  }
}
