import { object, string } from 'zod'

export const NewUserDetailsValidationSchema = object({
  fullname: string().min(1, 'Full Name is required'),
  companyRole: string().min(1, 'Company Role is required'),
  phoneNumber: string().regex(/^\d+$/, 'Phone Number must be numeric'),
  address: string().min(1, 'Address is required'),
})
