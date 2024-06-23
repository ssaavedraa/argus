import { object, string } from 'zod'

export const LoginValidationSchema = object({
  email: string().email(),
  password: string(),
})
