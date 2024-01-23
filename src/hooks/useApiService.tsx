import { useState } from 'react'
import { ApiRequestOptions, ApiResponse } from '../types'

export function useApiService<T>({
  method,
}: ApiRequestOptions): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const API_URL = import.meta.env.VITE_API_URL

  const fetchData = async (
    endpoint: string,
    body?: Record<string, any> | string | FormData | null,
  ) => {
    try {
      console.debug('sending request')
      setIsLoading(true)
      setError(null)

      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : null,
      }

      const response = await fetch(`${API_URL}/${endpoint}`, options)

      const responseData = await response.json()

      if (!/^2\d{2}$/.test(`${response.status}`)) {
        console.debug('throw error')
        throw new Error(responseData.message)
      }

      setData(responseData)
      setIsSuccess(true)
    } catch (error) {
      setIsSuccess(false)
      setError((error as Error).message)
    } finally {
      setIsLoading(false)
      setIsSuccess(!error)
    }
  }

  return {
    data,
    error,
    isLoading,
    fetchData,
    isSuccess,
  }
}
