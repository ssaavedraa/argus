'use client'

import { useFormState } from 'react-dom'
import Alert from './components/Alert'
import Form from './components/Form'
import { LoginAction } from './types'

export default function LoginPageForm({
  loginUser,
}: {
  loginUser: LoginAction
}) {
  const [state, formAction] = useFormState(loginUser, null)

  return (
    <>
      <h1 className='text-3xl pb-6 text-center'>Log In</h1>
      {!!state?.error && <Alert message={state?.error} />}
      <Form formAction={formAction} />
    </>
  )
}
