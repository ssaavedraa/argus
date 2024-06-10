/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react'

export interface FormProps {
  fields: FormFieldProps[]
}

export interface FormFieldProps extends Omit<FormElement, 'classname'> {
  name: string
  label: string
  type?: FormElementType
  value: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

type FormElementType = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "textarea" | "time" | "url" | "week";


export type FormElement =
  & Partial<HTMLInputElement>
  & Partial<HTMLTextAreaElement>
  & Partial<HTMLSelectElement>