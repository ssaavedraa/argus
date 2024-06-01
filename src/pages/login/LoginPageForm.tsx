'use client'

import Alert from '@/shared-ui/Alert/Alert'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { loginUser } from './actions'
import Form from './components/Form'

export default function LoginPageForm() {
  const [state, formAction] = useFormState(loginUser, null)

  const cookieStore = cookies()
  const session = cookieStore.get('session')

  if (session) {
    redirect('/admin/products')
  }

  useEffect(() => {
    if (state?.isSuccess) {
      redirect('/admin/products')
    }
  }, [state])

  return (
    <>
      <h1 className='text-3xl pb-6 text-center'>Log In</h1>
      {state?.isFailed && <Alert message={state?.message} />}
      <Form formAction={formAction} />
    </>
  )
}
