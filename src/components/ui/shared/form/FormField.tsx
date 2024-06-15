'use client'

import { ReactElement, cloneElement, useEffect, useRef, useState } from 'react'

import { useFormContext } from './FormProvider'

interface FormFieldProps {
  name: string
  label: string
  children: ReactElement
  required?: boolean
}

export const FormField = (props: FormFieldProps) => {
  const { name, label, children, required = false } = props

  const [hasContent, setHasContent] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const { validationErrors } = useFormContext()
  const error = validationErrors[name]

  const getLabelStyles = () =>
    hasContent ? '-translate-y-2 text-xs' : '-translate-y-0'

  useEffect(() => {
    if (inputRef.current) {
      setHasContent(!!inputRef.current.value)
    }
  }, [])

  useEffect(() => {
    const handleInputChange = () => {
      if (inputRef.current) {
        setHasContent(!!inputRef.current.value)
      }
    }

    const inputElement = inputRef.current
    inputElement?.addEventListener('input', handleInputChange)

    return () => {
      inputElement?.removeEventListener('input', handleInputChange)
    }
  }, [inputRef])

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <label className='relative w-full' htmlFor={name}>
        {cloneElement(children as React.ReactElement<any>, {
          ref: inputRef,
          id: name,
          name,
        })}
        {error && <p className='text-danger'>{error}</p>}
        <span
          className={`absolute top-4 left-2 tracking-wide capitalize pointer-events-none duration-200 peer-autofill:peer-focus:text-hex-900 peer-focus:-translate-y-2 peer-focus:text-xs peer-autofill:text-hex-900 ${getLabelStyles()}`}
        >
          {label}
          {required && <span className='text-danger'>*</span>}
        </span>
      </label>
    </div>
  )
}

FormField.displayName = 'FormField'
