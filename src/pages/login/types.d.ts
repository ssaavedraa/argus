export interface LoginFormData {
  email: string
  password: string
}

export type LoginAction = (
  // eslint-disable-next-line no-unused-vars
  state: any,
  // eslint-disable-next-line no-unused-vars
  formData: FormData,
) => Promise<void | {
  message: string
  isFailed: boolean
  isSuccess: boolean
}>
