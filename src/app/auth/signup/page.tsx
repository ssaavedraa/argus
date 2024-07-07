'use client'

import { useSearchParams } from 'next/navigation'

import SignupInvite from '@hex-pages/signup/SignupInvite'

const AuthSignup = () => {
  const searchParams = useSearchParams()

  const signupMethod = searchParams?.get('method')
  const inviteId = searchParams?.get('invite-id')

  if (signupMethod === 'invite' && inviteId) {
    return <SignupInvite inviteId={inviteId} />
  }

  return <div>SignupPage</div>
}

export default AuthSignup
