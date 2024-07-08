import { motion } from 'framer-motion'
import { ChangeEvent, useContext } from 'react'
import { NewCompanyDetailsValidationSchema } from 'utils/validation-schemas/newCompanyDetailsValidationSchema'

import { NewUserContext } from '@hex-pages/signup/SignupInvite'
import { FormAddress, FormField, FormInput } from '@hex-shared-components/form'

export const NewCompanyDetails = () => {
  const { companyDetails, setCompanyDetails, delta, setIsNextButtonDisabled } =
    useContext(NewUserContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setCompanyDetails((prevCompanyDetails) => ({
      ...prevCompanyDetails,
      [name]: value,
    }))

    setIsNextButtonDisabled(
      !!NewCompanyDetailsValidationSchema.safeParse(companyDetails).error
        ?.errors,
    )
  }

  return (
    <motion.div
      className='w-full flex flex-col gap-3'
      initial={{ x: delta > 0 ? '50%' : '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <FormField
        name='name'
        label='Company Name'
        required
        onChange={handleChange}
      >
        <FormInput name='name' defaultValue={companyDetails.name} />
      </FormField>
      <FormField
        name='domain'
        label='Company Domain'
        required
        onChange={handleChange}
      >
        <FormInput name='domain' defaultValue={companyDetails.domain} />
      </FormField>
      <FormField
        name='nit'
        label='Company NIT'
        required
        onChange={handleChange}
      >
        <FormInput name='nit' defaultValue={companyDetails.nit} />
      </FormField>
      <FormField
        name='phoneNumber'
        label='Company Phone Number'
        required
        onChange={handleChange}
      >
        <FormInput
          name='phoneNumber'
          defaultValue={companyDetails.phoneNumber}
        />
      </FormField>
      <FormAddress
        name='address'
        label='Company Address'
        required
        customHandleChange={handleChange}
        defaultValue={companyDetails.address}
        autoComplete='off'
      />
    </motion.div>
  )
}
