/* eslint-disable no-unused-vars */
import { Dispatch } from 'react'
import { ZodObject } from 'zod'

export interface FormProps {
  fields: Omit<FormFieldProps, 'setFormData' | 'value'>[]
  schema: ZodObject<Reacord<string, any>>
  cta: string
  onSubmit: (values: z.infer<typeof T>) => void
}

export interface FormFieldProps extends Omit<FormElement, 'classname'> {
  name: string
  label: string
  type?: FormElementType
  value: string
  setFormData: Dispatch
}

type FormElementType = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "textarea" | "time" | "url" | "week";


export type FormElement =
  & Partial<HTMLInputElement>
  & Partial<HTMLTextAreaElement>
  & Partial<HTMLSelectElement>