'use client'
import { ChangeEvent, FC } from 'react'

import { Input } from '@shared-components/input'

import { FormFieldProps } from './types'

export const FormField: FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  required = false,
  setFormData,
  value,
}) => {
  switch (type) {
    case 'textarea':
      return <textarea />
    default:
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setFormData((fd: Record<string, any>) => ({
          ...fd,
          [name]: value,
        }))
      }

      return (
        <Input
          label={label}
          name={name}
          required={required}
          value={value}
          handleChange={handleChange}
        />
      )
  }
}
