import Icon from '@/ui/icons/Icon'
import { Input } from '@nextui-org/react'
import { ChangeEvent, useState } from 'react'
import { LoginFormData } from '../types'
import FormFooter from './FormFooter'
import SubmitButton from './SubmitButton'

export default function Form({
  formAction,
}: {
  // eslint-disable-next-line no-unused-vars
  formAction: (payload: FormData) => void
}) {
  const formInitialState = {
    email: '',
    password: '',
  }

  const [formData, setFormData] = useState<LoginFormData>(formInitialState)

  const [formErrors, setFormErrors] = useState<Partial<LoginFormData>>({})

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () =>
    setIsPasswordVisible((prevState) => !prevState)

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(value)) {
      setFormErrors((prevState) => ({
        ...prevState,
        email: 'Invalid email address',
      }))
    } else {
      delete formErrors.email
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    switch (name) {
      case 'email':
        validateEmail(value)
        break
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <form className='flex flex-col items-center gap-4' action={formAction}>
      <Input
        name='email'
        type='text'
        label='Email'
        color='primary'
        variant='bordered'
        size='sm'
        className='w-full capitalize'
        classNames={{
          inputWrapper: 'border-[#7720D1] border bg-black bg-opacity-40',
        }}
        isRequired
        value={formData.email}
        onChange={handleChange}
        errorMessage={formErrors.email}
      />
      <Input
        name='password'
        type={isPasswordVisible ? 'text' : 'password'}
        label='Password'
        color='primary'
        variant='bordered'
        size='sm'
        className='w-full capitalize'
        classNames={{
          inputWrapper: 'border-[#7720D1] border bg-black bg-opacity-40',
        }}
        isRequired
        value={formData.password}
        onChange={handleChange}
        endContent={
          <button
            className='focus:outline-none'
            type='button'
            onClick={togglePasswordVisibility}
          >
            <Icon
              name={isPasswordVisible ? 'eyeHide' : 'eyeShow'}
              size='small'
            />
          </button>
        }
      />
      <FormFooter />
      <SubmitButton
        formAction={formAction}
        isDisabled={
          (!formData.email && !formData.password) || !!formErrors.email
        }
      />
    </form>
  )
}
