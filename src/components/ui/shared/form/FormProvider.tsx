'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useState
} from 'react'
import { ZodError, ZodTypeAny } from 'zod'

import { FormField } from './FormField'

export interface FormState {
  [key: string]: any
}

interface FormContextProps<T extends FormState> {
  validationErrors: Partial<Record<keyof T, T[keyof T]>>
  isPending: boolean
  // eslint-disable-next-line no-unused-vars
  handleChange: (name: any, value: T[keyof T]) => void
}

const FormContext = createContext<FormContextProps<any> | null>(
  {} as FormContextProps<any>,
)

export const useFormContext = <T extends FormState>(): FormContextProps<T> => {
  const context = useContext(FormContext) as FormContextProps<T>

  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }

  return context
}

interface FormProviderProps {
  children: ReactNode
  validationSchema: ZodTypeAny
  isPending: boolean
}

export const FormProvider = <T extends object>(props: FormProviderProps) => {
  const { validationSchema, children, isPending } = props

  const [validationErrors, setValidationErrors] = useState<
    Partial<Record<keyof T, T[keyof T]>>
  >({})

  const handleChange = (name: keyof T, value: T[keyof T]) => {
    validateField(name, value)
  }

  const validateField = (name: keyof T, value: T[keyof T]) => {
    try {
      validationSchema.parse({ [name]: value})

      setValidationErrors((ve) => ({
        ...ve,
        [name]: null,
      }))
    } catch (error: any) {
      if (error instanceof ZodError) {
        const message = error.errors[0].message
        setValidationErrors((ve) => ({
          ...ve,
          [name]: message,
        }))
      }
    }
  }

  return (
    <FormContext.Provider
      value={{
        handleChange,
        validationErrors,
        isPending
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

FormField.displayName = 'FormField'