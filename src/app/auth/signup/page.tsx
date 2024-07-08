import {
  getInviteDetails,
  updateInvitedUser,
  updateInvitedUserCompany,
} from '@hex-actions'

import SignupInvite from '@hex-pages/signup/SignupInvite'

const AuthSignup = async (props: any) => {
  const { method, 'invite-id': inviteId } = props.searchParams

  const inviteDetails = await getInviteDetails(inviteId)
  const { company: companyDetails, ...userDetails } = inviteDetails

  if (method === 'invite' && inviteId) {
    const actions = {
      updateInvitedUser,
      updateInvitedUserCompany,
    }
    return (
      <SignupInvite
        actions={actions}
        userDetails={userDetails}
        companyDetails={companyDetails}
      />
    )
  }

  return <div>SignupPage</div>
}

export default AuthSignup
