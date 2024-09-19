import { motion } from 'framer-motion'
import { ChangeEvent, useContext, useEffect } from 'react'

import { NewUserContext } from '@hex-pages/signup/SignupInvite'
import { FormAddress, FormField, FormInput } from '@hex-ui/form'
import { NewUserDetailsValidationSchema } from '@hex-utils/validation-schemas'

const NewUserDetails = () => {
  const { userDetails, setUserDetails, delta, setIsNextButtonDisabled } =
    useContext(NewUserContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }))

    setIsNextButtonDisabled(
      !!NewUserDetailsValidationSchema.safeParse(userDetails).error?.errors,
    )
  }

  useEffect(() => {
    setIsNextButtonDisabled(
      !!NewUserDetailsValidationSchema.safeParse(userDetails).error?.errors,
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div
      className='w-full flex flex-col gap-3'
      initial={{ x: delta > 0 ? '50%' : '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <FormField
        label='full Name'
        name='fullname'
        required
        onChange={handleChange}
      >
        <FormInput defaultValue={userDetails?.fullname} />
      </FormField>
      <FormField
        label='Company Role'
        name='companyRole'
        required
        onChange={handleChange}
      >
        <FormInput defaultValue={userDetails?.companyRole} />
      </FormField>
      <FormField
        label='Phone Number'
        name='phoneNumber'
        required
        onChange={handleChange}
      >
        <FormInput defaultValue={userDetails?.phoneNumber} />
      </FormField>
      <FormAddress
        label='Address'
        name='address'
        required
        customHandleChange={handleChange}
        defaultValue={userDetails?.address}
        autoComplete='off'
      />
    </motion.div>
  )
}

export default NewUserDetails
