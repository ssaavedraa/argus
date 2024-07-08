'use client'

import { ReactNode, createContext, useContext } from 'react'
import { ZodObject } from 'zod'

import { FormField } from './FormField'

export interface FormState {
  [key: string]: any
}

interface FormContextProps {
  isPending: boolean
  validationSchema: ZodObject<any, any>
}

const FormContext = createContext<FormContextProps>({} as FormContextProps)

export const useFormContext = () => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }

  return context
}

interface FormProviderProps {
  children: ReactNode
  validationSchema: ZodObject<any, any>
  isPending: boolean
}

export const FormProvider = (props: FormProviderProps) => {
  const { validationSchema, children, isPending } = props

  return (
    <FormContext.Provider
      value={{
        validationSchema,
        isPending,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

FormField.displayName = 'FormField'
