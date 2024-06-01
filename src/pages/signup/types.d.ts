export type SignupAction = (
  // eslint-disable-next-line no-unused-vars
  state: any,
  // eslint-disable-next-line no-unused-vars
  formData: FormData,
) => Promise<void | { error: string }>

export interface SignupFormData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface PasswordRequirement {
  description: string
  errorKey: keyof PasswordRequirementErrors
  validation: RegExp
}

export interface PasswordRequirementErrors {
  '8Characters': boolean
  uppercase: boolean
  lowercase: boolean
  number: boolean
  specialCharacter: boolean
}
