'use client'

import SignupPageForm from '@/views/signup/SignupPageForm'
import { singupUser } from './actions'

export default function SignupPage() {
  return <SignupPageForm signupUser={singupUser} />
}
