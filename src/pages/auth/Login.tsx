'use client'

import { Form, FormProps } from '@hex-shared-components/form'
import { LoginSchema } from '@hex-utils/validation-schemas'

interface LoginPageProps {
  action: any
}

const LoginPage = ({ action }: LoginPageProps) => {
  const formFields: FormProps['fields'] = [
    {
      name: 'email',
      label: 'email',
      type: 'email',
      required: true,
      autoComplete: 'email',
    },
    {
      name: 'password',
      label: 'password',
      type: 'password',
      required: true,
      autoComplete: 'current-password',
    },
  ]

  return (
    <div className='flex flex-col items-center w-5/6 mx-auto'>
      <Form
        fields={formFields}
        onSubmit={action}
        schema={LoginSchema}
        cta='Log In'
      />
    </div>
  )
}

export default LoginPage
