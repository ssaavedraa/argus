import { login } from '../../../actions'
import LoginPage from '@pages/auth/Login'

const AuthLogin = () => {
  return <LoginPage action={login} />
}

export default AuthLogin
