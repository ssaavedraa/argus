'use client'

import { Form, FormProps } from '@shared-components/form'

import { LoginSchema } from '@utils/validation-schemas'

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
    },
    {
      name: 'password',
      label: 'password',
      type: 'password',
      required: true,
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
