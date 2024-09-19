'use client'

import { useRouter } from 'next/navigation'
import {
  ChangeEvent,
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  createContext,
  useState,
} from 'react'
import { NewCompanyDetailsValidationSchema } from 'utils/validation-schemas/newCompanyDetailsValidationSchema'
import { ZodObject, ZodTypeAny } from 'zod'

import { Button } from '@hex-ui/button'
import { Form, FormButton } from '@hex-ui/form'
import {
  NewUserCredentialsValidationSchema,
  NewUserDetailsValidationSchema,
} from '@hex-utils/validation-schemas'

import NewCompanyDetails from './components/onboarding/newUser/NewCompanyDetails'
import NewUserCredentials from './components/onboarding/newUser/NewUserCredentials'
import NewUserDetails from './components/onboarding/newUser/NewUserDetails'
import NewUserWelcome from './components/onboarding/newUser/NewUserWelcome'
import NewUserWrapUp from './components/onboarding/newUser/NewUserWrapUp'

interface SignupInviteProps {
  userDetails: User
  companyDetails: Company
  actions: {
    // eslint-disable-next-line no-unused-vars
    updateInvitedUser: (...args: any) => Promise<void>
    // eslint-disable-next-line no-unused-vars
    updateInvitedUserCompany: (...args: any) => Promise<void>
  }
}

export interface User {
  address: string
  companyRole: string
  email: string
  fullname: string
  phoneNumber: string
  password: string
  passwordConfirmation: string
  id: number
}

export interface Company {
  address: string
  domain: string
  name: string
  nit: string
  phoneNumber: string
  id: number
}

interface Step {
  id: number
  view: ReactElement
  validationSchema?: ZodTypeAny
  // eslint-disable-next-line no-unused-vars
  formAction?: (payload: any) => Promise<void>
}

interface NewUserContextProps {
  userDetails: User
  companyDetails: Company
  step: number
  steps: Step[]
  delta: number
  setUserDetails: Dispatch<SetStateAction<User>>
  setCompanyDetails: Dispatch<SetStateAction<Company>>
  setIsNextButtonDisabled: Dispatch<SetStateAction<boolean>>
  // eslint-disable-next-line no-unused-vars
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  nextStep: () => void
  prevStep: () => void
}

export const NewUserContext = createContext<NewUserContextProps>(
  {} as NewUserContextProps,
)

const SignupInvite: FC<SignupInviteProps> = ({
  actions,
  userDetails: userDetailsInitialState,
  companyDetails: companyDetailsInitialState,
}) => {
  const [userDetails, setUserDetails] = useState<User>(userDetailsInitialState)
  const [companyDetails, setCompanyDetails] = useState<Company>(
    companyDetailsInitialState,
  )
  const [step, setStep] = useState(0)
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true)

  const router = useRouter()

  const delta = step - (step - 1)

  const steps = [
    {
      id: 0,
      view: <NewUserWelcome />,
    },
    {
      id: 1,
      view: <NewUserCredentials />,
      formAction: async (formData: FormData) => {
        formData.append('id', `${userDetails.id}`)
        try {
          await actions?.updateInvitedUser(formData)
        } catch (error) {
          throw error
        }
      },
      validationSchema: NewUserCredentialsValidationSchema,
    },
    {
      id: 2,
      view: <NewUserDetails />,
      formAction: async (formData: FormData) => {
        formData.append('id', `${userDetails.id}`)
        try {
          await actions?.updateInvitedUser(formData)
        } catch (error) {
          throw error
        }
      },
      validationSchema: NewUserDetailsValidationSchema,
    },
    {
      id: 3,
      view: <NewCompanyDetails />,
      formAction: async (formData: FormData) => {
        formData.append('id', `${companyDetails.id}`)
        try {
          await actions?.updateInvitedUserCompany(formData)
        } catch (error) {
          throw error
        }
      },
      valdiationSchema: NewCompanyDetailsValidationSchema,
    },
    {
      id: 4,
      view: <NewUserWrapUp />,
    },
  ]

  const isFirstStep = step === 0
  const isLastStep = step === steps.length - 1

  const nextStep = () => {
    if (isLastStep) {
      router.push('/auth/login')
    }

    setStep((step) => {
      if (step < steps.length - 1) {
        return step + 1
      }

      return step
    })
  }

  const prevStep = () => {
    setStep((step) => {
      if (step > 0) {
        return step - 1
      }

      return step
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }))
  }

  return (
    <NewUserContext.Provider
      value={{
        userDetails,
        companyDetails,
        step,
        steps,
        delta,
        setUserDetails,
        setCompanyDetails,
        setIsNextButtonDisabled,
        nextStep,
        prevStep,
        handleChange,
      }}
    >
      <div className='min-w-full snap-start flex flex-col items-center text-center'>
        <Form
          initialValues={userDetails}
          action={steps[step].formAction as any}
          validationSchema={
            steps[step]!.validationSchema as ZodObject<any, any>
          }
          onTransitionEnd={nextStep}
        >
          {steps[step].view}
          {isFirstStep || isLastStep ? (
            <Button onClick={nextStep}>
              {isFirstStep ? 'Continue signing up!' : 'Finish'}
            </Button>
          ) : (
            <div className='flex flex-row flex-nowrap justify-between w-full'>
              <Button variant='text' type='button' onClick={prevStep}>
                Back
              </Button>
              <FormButton disabled={isNextButtonDisabled}>
                {isLastStep ? 'Finish' : 'Next'}
              </FormButton>
            </div>
          )}
        </Form>
      </div>
    </NewUserContext.Provider>
  )
}

export default SignupInvite
