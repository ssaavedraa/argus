'use client'

import FormField from './FormField'
import { FormProps } from './types'

export default function Form({ fields }: FormProps) {
  return (
    <form className='flex flex-col gap-2 w-5/6 mx-auto'>
      {fields.map((field, index) => (
        <FormField key={index} {...field} />
      ))}
    </form>
  )
}
