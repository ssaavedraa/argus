'use client'

import SignupPageForm from '@/pages/signup/SignupPageForm'
import { singupUser } from './actions'

export default function SignupPage() {
  return <SignupPageForm signupUser={singupUser} />
}
