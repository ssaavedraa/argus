'use client'

import {
  ChangeEvent,
  ReactElement,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react'
import { ZodError } from 'zod'

import { FormError } from './FormError'
import { FormInput } from './FormInput'
import { useFormContext } from './FormProvider'

interface FormFieldProps {
  name: string
  label: string
  children: ReactElement | ReactElement[]
  showError?: boolean
  required?: boolean
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const FormField = (props: FormFieldProps) => {
  const {
    name,
    label,
    children,
    required = false,
    onChange,
    showError = true,
  } = props

  const [hasContent, setHasContent] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const { validationSchema } = useFormContext()

  const [fieldError, setFieldError] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (validationSchema && validationSchema._def) {
      const fieldSchema = validationSchema.pick({ [name as string]: true })

      try {
        fieldSchema.parse({ [name as string]: value })

        setFieldError(null)
      } catch (error) {
        if (error instanceof ZodError) {
          setFieldError(error.issues[0].message)
        }
      }
    }

    if (onChange) {
      onChange(e)
    }
  }

  const getLabelStyles = () =>
    hasContent ? '-translate-y-2 text-xs' : '-translate-y-0'

  const enhanceChild = (child: ReactElement) => {
    if (isValidElement(child) && (child.type as any) === FormInput) {
      return cloneElement(child, {
        ref: inputRef,
        id: name,
        name,
        onChange: handleChange,
      } as any)
    }
    return child
  }

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
        {Array.isArray(children)
          ? children.map((child) => enhanceChild(child))
          : enhanceChild(children)}
        {Array.isArray(children)
          ? children.find((child) => (child.type as any) === FormError) || null
          : fieldError && showError && <FormError message={fieldError} />}
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
