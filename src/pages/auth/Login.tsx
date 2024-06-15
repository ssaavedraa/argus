'use client'

import {
  Form,
  FormButton,
  FormField,
  FormInput,
} from '@hex-shared-components/form'
import { LoginSchema } from '@hex-utils/validation-schemas'

interface LoginPageProps {
  // eslint-disable-next-line no-unused-vars
  action: (formData: FormData) => Promise<{ error: string }>
}

export interface UserCredentials {
  email: string
  password: string
}

const initialValues: UserCredentials = {
  email: '',
  password: '',
}

const LoginPage = ({ action }: LoginPageProps) => {
  return (
    <Form
      initialValues={initialValues}
      action={action}
      validationSchema={LoginSchema}
    >
      <FormField name='email' label='Email' required>
        <FormInput type='email' autoComplete='email' />
      </FormField>
      <FormField name='password' label='password' required>
        <FormInput type='password' autoComplete='curent-password' />
      </FormField>
      <FormButton>
        <p>Sign In</p>
      </FormButton>
    </Form>
  )
}

export default LoginPage
