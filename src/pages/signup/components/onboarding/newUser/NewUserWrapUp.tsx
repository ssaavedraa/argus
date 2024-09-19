import { useContext } from 'react'

import { NewUserContext } from '@hex-pages/signup/SignupInvite'

const NewUserWrapUp = () => {
  const { userDetails } = useContext(NewUserContext)

  return (
    <div className='bg-hex-200 text-hex-700 p-8 rounded-lg shadow-md my-4'>
      <p className='text-2xl font-bold mb-4'>Hey {userDetails?.fullname},</p>
      <p className='text-lg mb-4'>Welcome to Hex!</p>
      <p className='text-md'>
        {"We're excited to have you join our community of entrepreneurs!"}
      </p>
      <p className='text-md mt-4'>Cheers,</p>
      <p className='text-md font-bold'>The Hex Team</p>
    </div>
  )
}

export default NewUserWrapUp
