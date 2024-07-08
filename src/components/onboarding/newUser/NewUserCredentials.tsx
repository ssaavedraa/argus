import { Icon } from '@iconify/react/dist/iconify.js'
import { motion } from 'framer-motion'
import { ChangeEvent, useContext, useEffect, useState } from 'react'

import { NewUserContext } from '@hex-pages/signup/SignupInvite'
import { FormField, FormInput } from '@hex-shared-components/form'
import {
  NewUserCredentialsValidationSchema,
  PasswordValidationSchema,
} from '@hex-utils/validation-schemas'

export const NewUserCredentials = () => {
  const { userDetails, handleChange, setIsNextButtonDisabled, delta } =
    useContext(NewUserContext)

  const passwordRequirementsInitialState = [
    {
      description: 'At least 8 characters long.',
      isValid: false,
    },
    {
      description: 'Include at least one uppercase letter.',
      isValid: false,
    },
    {
      description: 'Include at least one lowercase letter.',
      isValid: false,
    },
    {
      description: 'Include at least one number.',
      isValid: false,
    },
    {
      description: 'Include at least one special character.',
      isValid: false,
    },
    {
      description: 'Passwords must match.',
      isValid: false,
    },
  ]

  const [passwordRequirements, setPasswordRequirements] = useState(
    passwordRequirementsInitialState,
  )

  const validatePasswordRequirements = (
    password: string,
    passwordConfirmation: string,
  ) => {
    const validationResult = PasswordValidationSchema.safeParse(password)
    const validationErrors =
      validationResult.error?.errors.map(({ message }) => message) ?? []

    const updatedRequirements = passwordRequirementsInitialState.map(
      ({ description }, index) => {
        if (index === passwordRequirementsInitialState.length - 1) {
          return {
            description,
            isValid: password === passwordConfirmation,
          }
        } else {
          return {
            description,
            isValid: !validationErrors.includes(description),
          }
        }
      },
    )

    setPasswordRequirements(updatedRequirements)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const newUserDetails = { ...userDetails, [name]: value }

    handleChange(e)
    validatePasswordRequirements(
      newUserDetails.password,
      newUserDetails.passwordConfirmation,
    )
  }

  const shouldDisableNextButton = () => {
    const isFormValid = NewUserCredentialsValidationSchema.refine(
      (data: any) => data.password === data.passwordConfirmation,
      {
        message: 'Passwords must match',
        path: ['confirmPassword'],
      },
    ).safeParse({
      email: userDetails.email,
      password: userDetails.password,
      passwordConfirmation: userDetails.passwordConfirmation,
    })

    return !!isFormValid.error?.issues
  }

  useEffect(() => {
    if (userDetails.password || userDetails.passwordConfirmation) {
      validatePasswordRequirements(
        userDetails.password,
        userDetails.passwordConfirmation,
      )
    }
    setIsNextButtonDisabled(shouldDisableNextButton())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails])

  return (
    <motion.div
      className='w-full flex flex-col gap-3'
      initial={{ x: delta > 0 ? '50%' : '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <FormField
        label='email'
        name='email'
        required
        onChange={handleChange}
        showError={false}
      >
        <FormInput
          autoComplete='email'
          type='email'
          defaultValue={userDetails.email}
        />
      </FormField>
      <FormField
        label='password'
        name='password'
        required
        onChange={handlePasswordChange}
        showError={false}
      >
        <FormInput
          type='password'
          autoComplete='new-password'
          defaultValue={userDetails.password}
        />
      </FormField>
      <FormField
        label='Confirm Password'
        name='passwordConfirmation'
        required
        onChange={handlePasswordChange}
        showError={false}
      >
        <FormInput
          type='password'
          autoComplete='new-password'
          defaultValue={userDetails.passwordConfirmation}
        />
      </FormField>
      <div className='bg-hex-950 mt-1 p-4 rounded-lg'>
        <span className='pb-2 block'>Password requirements</span>
        <ul className='font-light text-sm flex flex-col gap-1'>
          {passwordRequirements.map(({ description, isValid }, index) => (
            <li
              className={`flex flex-row flex-nowrap text-nowrap gap-2 items-center drop-shadow-lg ${isValid ? 'text-success' : 'text-danger'}`}
              key={index}
            >
              {isValid ? (
                <Icon icon='carbon:checkmark-outline' fontSize={20} />
              ) : (
                <Icon icon='carbon:close-outline' fontSize={20} />
              )}
              {description}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
