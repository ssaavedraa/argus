'use client'

import { useSearchParams } from 'next/navigation'
import { ReactNode, useState, useTransition } from 'react'
import { ZodTypeAny } from 'zod'

import { FormProvider, FormState } from './FormProvider'

interface FormProps<T extends FormState> {
  children: ReactNode
  initialValues: T
  validationSchema: ZodTypeAny
  // eslint-disable-next-line no-unused-vars
  action: (formData: FormData) => Promise<{ error: string }>
}

export const Form = <T extends FormState>(props: FormProps<T>) => {
  const { children, validationSchema, action } = props

  const searchParams = useSearchParams()
  const [formError, setFormError] = useState<string | null>(
    searchParams?.get('error') ?? null,
  )

  const [isPending, startTransition] = useTransition()

  const handleLogin = (formData: FormData) => {
    startTransition(() => {
      action(formData)
        .then((data) => {
          setFormError(data?.error || null)
        })
        .catch((error) => console.error({ error }))
    })
  }

  return (
    <FormProvider validationSchema={validationSchema} isPending={isPending}>
      {/* TODO: Create Alert component */}
      {(formError || searchParams?.get('error')) && (
        <p>{formError || searchParams?.get('error')}</p>
      )}
      <form
        className='flex flex-col gap-3 my-4 w-full mx-auto'
        action={handleLogin}
      >
        {children}
      </form>
    </FormProvider>
  )
}
