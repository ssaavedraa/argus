import { useContext } from 'react'

import { NewUserContext } from '@hex-pages/signup/SignupInvite'

const NewUserWelcome = () => {
  const { userDetails } = useContext(NewUserContext)
  return (
    <>
      <p className='text-lg py-4'>
        Welcome to Hex {userDetails?.fullname?.split(' ')[0]}!
      </p>
    </>
  )
}

export default NewUserWelcome
