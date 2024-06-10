import { ChangeEvent } from 'react';

export interface InputProps extends Partial<HTMLInputElement> {
  // eslint-disable-next-line no-unused-vars
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  label: string
}