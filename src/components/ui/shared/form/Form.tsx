'use client'

import { useState } from 'react'
import { z } from 'zod'

import { FormField } from './FormField'
import { FormProps } from './types'

export const Form = ({ fields, schema, onSubmit, cta }: FormProps) => {
  const [formData, setFormData] = useState<z.infer<typeof schema>>(
    {} as z.infer<typeof schema>,
  )

  return (
    <form className='flex flex-col gap-3 my-4 w-full mx-auto' action={onSubmit}>
      {fields.map((field, index) => (
        <FormField
          key={index}
          setFormData={setFormData}
          value={formData[field.name] || ''}
          type={field.type}
          {...field}
        />
      ))}
      <button className='bg-accent text-hex-800 font-semibold px-5 py-2 rounded-md mt-4 w-full'>
        {cta}
      </button>
    </form>
  )
}
