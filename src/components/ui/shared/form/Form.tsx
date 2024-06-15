'use client'

import { useSearchParams } from 'next/navigation'
import { FormEvent, useState, useTransition } from 'react'
import { z } from 'zod'

import { Spinner } from '@hex-shared-components/spinner'

import { FormField } from './FormField'
import { FormProps } from './types'

export const Form = ({ fields, schema, onSubmit, cta }: FormProps) => {
  const [formData, setFormData] = useState<z.infer<typeof schema>>(
    {} as z.infer<typeof schema>,
  )

  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(
    searchParams?.get('error') ?? null,
  )

  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    startTransition(() => {
      onSubmit(formData)
        .then((data) => {
          setError(data?.error || null)
        })
        .catch((error) => console.error({ error }))
    })
  }

  return (
    <form
      className='flex flex-col gap-3 my-4 w-full mx-auto'
      onSubmit={handleSubmit}
    >
      {(error || searchParams?.get('error')) && (
        <p>{error || searchParams?.get('error')}</p>
      )}
      {fields.map(({ type, name, label, autoComplete, ...field }, index) => (
        <FormField
          key={index}
          setFormData={setFormData}
          value={formData[name] || ''}
          type={type}
          disabled={isPending}
          name={name}
          label={label}
          autoComplete={autoComplete}
          {...field}
        />
      ))}
      <button
        className='bg-accent text-hex-800 font-semibold px-5 py-2 rounded-md mt-4 w-full flex flex-row flex-nowrap justify-center items-center disabled:opacity-70 h-10'
        disabled={isPending}
      >
        {isPending && <Spinner />}
        {cta}
      </button>
    </form>
  )
}
