import { useFormState } from 'react-dom'
import Alert from './components/Alert'
import Form from './components/Form'
import { SignupAction } from './types'

export default function SignupPageForm({
  signupUser,
}: {
  signupUser: SignupAction
}) {
  const [state, formAction] = useFormState(signupUser, null)

  return (
    <>
      <h1 className='text-3xl pb-6 text-center'>Sign Up</h1>
      {!!state?.error && <Alert message={state?.error} />}
      <Form formAction={formAction} />
    </>
  )
}
