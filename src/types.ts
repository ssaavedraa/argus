import { ReactNode } from 'react'

// COMPONENTS
export interface ListProps {
  children: ReactNode
  classname?: string
}

// API SERVICE
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface ApiRequestOptions {
  method: HttpMethod
  body?: Record<string, any> | string | FormData | null
}

export interface ApiResponse<T> {
  data: T | null
  isLoading: boolean
  error: Error | null
}
