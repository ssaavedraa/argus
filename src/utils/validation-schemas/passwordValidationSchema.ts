import { z } from 'zod'

export const PasswordValidationSchema = z
  .string()
  .min(8, { message: 'At least 8 characters long.' })
  .regex(/[A-Z]/, { message: 'Include at least one uppercase letter.' })
  .regex(/[a-z]/, { message: 'Include at least one lowercase letter.' })
  .regex(/\d/, { message: 'Include at least one number.' })
  .regex(/[\W_]/, { message: 'Include at least one special character.' })
