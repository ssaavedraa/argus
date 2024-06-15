import { login } from '@hex-actions'

import LoginPage from '@hex-pages/auth/Login'


const AuthLogin = () => {
  return <LoginPage action={login} />
}

export default AuthLogin
