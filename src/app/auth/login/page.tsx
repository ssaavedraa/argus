import { Suspense } from 'react'

import { login } from '@hex-actions'

import LoginPage from '@hex-pages/auth/Login'

const AuthLogin = () => {
  return (
    <Suspense>
      <LoginPage action={login} />
    </Suspense>
  )
}

export default AuthLogin
