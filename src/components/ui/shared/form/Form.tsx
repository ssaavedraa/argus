'use client'

import { FormEvent, useState, useTransition } from 'react'
import { z } from 'zod'

import { Spinner } from '@shared-components/spinner'

import { FormField } from './FormField'
import { FormProps } from './types'

export const Form = ({ fields, schema, onSubmit, cta }: FormProps) => {
  const [formData, setFormData] = useState<z.infer<typeof schema>>(
    {} as z.infer<typeof schema>,
  )
  const [error, setError] = useState<string>('')

  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    startTransition(() => {
      onSubmit(formData)
        .then((data) => {
          setError(data?.error || '')
        })
        .catch((error) => console.error({ error }))
    })
  }

  return (
    <form
      className='flex flex-col gap-3 my-4 w-full mx-auto'
      onSubmit={handleSubmit}
    >
      {error && <p>{error}</p>}
      {fields.map((field, index) => (
        <FormField
          key={index}
          setFormData={setFormData}
          value={formData[field.name] || ''}
          type={field.type}
          disabled={isPending}
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
