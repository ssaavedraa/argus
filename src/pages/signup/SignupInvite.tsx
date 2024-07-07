'use client'

import {
  ChangeEvent,
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  createContext,
  useEffect,
  useState,
  useTransition,
} from 'react'
import { ZodTypeAny } from 'zod'

import {
  getInviteDetails,
  updateInvitedUser,
  updateInvitedUserCompany,
} from '@hex-actions'

import {
  NewCompanyDetails,
  NewUserCredentials,
  NewUserDetails,
  NewUserWelcome,
  NewUserWrapUp,
} from '@hex-components/onboarding/newUser'
import { Alert } from '@hex-shared-components/altert'
import { Button } from '@hex-shared-components/button'
import { Spinner } from '@hex-shared-components/spinner'

interface SignupInviteProps {
  inviteId: string
}

export interface User {
  address: string
  companyRole: string
  email: string
  fullname: string
  phoneNumber: string
  password: string
  passwordConfirmation: string
}

export interface Company {
  address: string
  domain: string
  name: string
  nit: string
  phoneNumber: string
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

const SignupInvite: FC<SignupInviteProps> = ({ inviteId }) => {
  const [userDetails, setUserDetails] = useState<User>({} as User)
  const [companyDetails, setCompanyDetails] = useState<Company>({} as Company)
  const [step, setStep] = useState(0)
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [isPending, startTransition] = useTransition()

  const delta = step - (step - 1)

  const fetchInitialState = async () => {
    const { company: companyDetails, ...userDetails } =
      await getInviteDetails(inviteId)
    setUserDetails(userDetails)
    setCompanyDetails(companyDetails)
  }

  const submitForm = async () => {
    const currentStep = steps[step]
    if (currentStep?.formAction) {
      let formActionPayload: User | Company

      if (step === 1 || step === 2) {
        formActionPayload = userDetails
      } else if (step === 3) {
        formActionPayload = companyDetails
      } else {
        return
      }

      await currentStep?.formAction(formActionPayload as any)
    }
  }

  const nextStep = () => {
    startTransition(async () => {
      try {
        await submitForm()

        setStep((step) => {
          if (step < steps.length - 1) {
            return step + 1
          }

          return step
        })

        setError(null)
        setIsNextButtonDisabled(true)
      } catch (error: any) {
        setError(error.message)
      }
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

  // TODO: form actions
  const steps = [
    {
      id: 0,
      view: <NewUserWelcome />,
    },
    {
      id: 1,
      view: <NewUserCredentials />,
      formAction: updateInvitedUser,
    },
    {
      id: 2,
      view: <NewUserDetails />,
      formAction: updateInvitedUser,
    },
    {
      id: 3,
      view: <NewCompanyDetails />,
      // eslint-disable-next-line no-unused-vars
      formAction: updateInvitedUserCompany,
    },
    {
      id: 4,
      view: <NewUserWrapUp />,
    },
  ]

  const isFirstStep = step === 0
  const isLastStep = step === steps.length - 1

  useEffect(() => {
    fetchInitialState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        {error && <Alert message={error} variant='error' />}
        {steps[step].view}
        {isFirstStep ? (
          <Button onClick={nextStep}>Continue signing up!</Button>
        ) : (
          <div className='flex flex-row flex-nowrap justify-between w-full'>
            <Button variant='text' onClick={prevStep}>
              Back
            </Button>
            <Button
              disabled={isNextButtonDisabled || isPending}
              onClick={nextStep}
            >
              {isPending && <Spinner />}
              {isLastStep ? 'Finish' : 'Next'}
            </Button>
          </div>
        )}
      </div>
    </NewUserContext.Provider>
  )
}

export default SignupInvite
