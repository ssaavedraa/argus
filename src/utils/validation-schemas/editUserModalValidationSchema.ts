import { object, string } from 'zod'

export const EditUserModalValidationSchema = object({
  fullname: string().min(1, 'Full name is required'),
  email: string().email({ message: 'Invalid email address' }),
})
