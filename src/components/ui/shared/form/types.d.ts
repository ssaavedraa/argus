/* eslint-disable no-unused-vars */
import { Dispatch } from 'react'
import { ZodObject } from 'zod'

export interface FormProps {
  fields: Omit<FormFieldProps, 'setFormData' | 'value'>[]
  schema: ZodObject<Reacord<string, any>>
  cta: string
  onSubmit: (values: z.infer<typeof T>) => Promise<{ error: string | undefined }>
}

export interface FormFieldProps extends Omit<FormElement, 'classname' | 'autocomplete'> {
  name: string
  label: string
  type?: FormElementType
  value: string
  setFormData: Dispatch
  autoComplete: AutoFill
}

type FormElementType = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "textarea" | "time" | "url" | "week";


export type FormElement =
  | Partial<InputHTMLAttributes<HTMLInputElement>>
  | Partial<InputHTMLAttributes<HTMLTextAreaElement>>
  | Partial<InputHTMLAttributes<HTMLSelectElement>>