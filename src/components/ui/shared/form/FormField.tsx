'use client'
import { FC } from 'react'

import { Input } from '@shared-components/input'

import { FormFieldProps } from './types'

const FormField: FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  required = false,
  handleChange,
  value,
}) => {
  switch (type) {
    case 'textarea':
      return <textarea />
    default:
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

export default FormField
