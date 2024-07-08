import { object, string } from 'zod'

import { PasswordValidationSchema } from './passwordValidationSchema'

export const NewUserCredentialsValidationSchema = object({
  email: string().email({ message: 'Invalid email address' }),
  password: PasswordValidationSchema,
  passwordConfirmation: PasswordValidationSchema,
})
