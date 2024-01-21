import { ReactNode } from 'react'

// COMPONENTS
export interface ListProps {
  children: ReactNode
  classname?: string
}

type IconName = 'plus'

export interface IconProps {
  name: IconName
  size?: string
  customClassName?: string
}

export interface TableProps {
  columns: string[]
  data: Record<string, any>[] | undefined
}

export interface TableHeaderProps {
  columns: string[]
}

export interface TableRowProps {
  rowData: Record<string, any>
  columns: string[]
  isLastRow: boolean
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
