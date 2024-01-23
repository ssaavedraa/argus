import { ChangeEvent, ReactNode } from 'react'

export type IconName = 'plus' | 'close' | 'error' | 'info' | 'success'
type InputType = 'text' | 'number'
export type Size = 'small' | 'medium' | 'large'
export type AlertType = 'success' | 'error' | 'info'

// COMPONENTS
export interface ListProps {
  children: ReactNode
  classname?: string
}

export interface IconProps {
  name: IconName
  size?: Size
  customClassName?: string
}

export interface TableProps {
  columns: string[]
  tableData: TableData[]
}

export interface TableHeaderProps {
  columns: string[]
}

export interface TableRowProps {
  rowData: Record<string, any>
  columns: string[]
  isLastRow: boolean
  fullData: Record<string, any>
}

export interface ModalProps {
  title?: ReactNode | string
  children: ReactNode
  actions?: ReactNode
  size?: Size
}

export interface AlertProps {
  type: AlertType
  message?: string
  iconName?: IconName
}

export interface InputProps {
  name: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string | number | readonly string[] | boolean
  error?: string
  type?: InputType
}

export interface TogglerProps extends Omit<InputProps, 'type'> {
  caption?: string
}

export interface FormField {
  name: string
  type: InputType
}

// MODELS
export interface Product {
  name: string
  price: number
  stock: number | undefined
  needStock: boolean
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
}

export interface ApiResponse<T> {
  data: T | null
  isLoading: boolean
  isSuccess: boolean
  error: string | null
  fetchData: (
    endpoint: string,
    body?: Record<string, any> | string | FormData | null,
  ) => Promise<void>
}

export interface ProductTableData {
  columns: string[]
  tableData: TableData[]
}

export interface TableData {
  cellsData: Pick<Product, 'name' | 'price' | 'stock'>
  fullData: Record<string, any>
}

//CONTEXT
export interface ModalContextProps {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
}

//HOOKS
export interface FormHook<FormData, FormErrors> {
  formData: FormData
  formErrors: FormErrors
  isSubmitButtonDisabled: boolean
  handleFormDataChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
}

export interface UseFormParams<FormData> {
  formDataInitialState: FormData
  validationSchema: (formData: any) => Record<string, any>
  postEndpoint: string
}

export type ValidationSchema = Record<string, (value: any) => string | void>

// UTILS
export type StringifyInterface<T> = {
  [Key in keyof T]: string
}

// FORMS
export interface CreateProductFormData {
  name: string
  price: number
  needStock: boolean
  stock: number
}

export type CreateProductFormErrors = StringifyInterface<CreateProductFormData>
