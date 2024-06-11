'use client'

import { ChangeEvent, useState } from 'react'

import { Form, FormFieldProps } from '@shared-components/form'

interface UserCredentials {
  email: string
  password: string
}

const LoginPage = () => {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>(
    {} as UserCredentials,
  )

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setUserCredentials((prevUserCredentials) => ({
      ...prevUserCredentials,
      [name]: value,
    }))
  }

  const formFields: FormFieldProps[] = [
    {
      name: 'email',
      label: 'email',
      type: 'email',
      required: true,
      handleChange: handleInputChange,
      value: userCredentials.email,
    },
    {
      name: 'password',
      label: 'password',
      type: 'password',
      required: true,
      handleChange: handleInputChange,
      value: userCredentials.password,
    },
  ]

  return (
    <div className='flex flex-col items-center'>
      <Form fields={formFields} />
      <button className='bg-accent text-hex-800 font-semibold px-5 py-2 rounded-md mt-4'>
        Log In
      </button>
    </div>
  )
}

export default LoginPage
