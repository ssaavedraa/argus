import { object, string } from 'zod'

export const NewCompanyDetailsValidationSchema = object({
  name: string().min(1, 'Company Name is required'),
  domain: string().min(1, 'Company Domain is required'),
  nit: string().regex(/^\d+$/, 'Company NIT is required'),
  phoneNumber: string().regex(/^\d+$/, 'Company Phone Number must be numeric'),
  address: string().min(1, 'Company Address is required'),
})
