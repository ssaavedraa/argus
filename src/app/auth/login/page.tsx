'use client'

import LoginPageForm from '@/views/login/LoginPageForm'
import { loginUser } from './actions'

export default function LoginPage() {
  return <LoginPageForm loginUser={loginUser} />
}
