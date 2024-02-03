'use client'

import { Button, Input, Link } from '@nextui-org/react'
import { ChangeEvent, useState } from 'react'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      })

      const test = await response.json()
    } catch (error) {
      console.error
    }
  }

  return (
    <>
      <h1 className='text-3xl pb-6 text-center'>Log In</h1>
      <form
        className='flex flex-col items-center gap-4'
        onSubmit={handleSubmit}
      >
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
        />
        <Input
          name='password'
          type='password'
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
        />
        <small>
          Do not have an account?
          <span className='px-2'>|</span>
          <Link color='secondary' href='signup'>
            Join Hex now
          </Link>
        </small>
        <Button
          variant='solid'
          color='primary'
          className='mt-4'
          onClick={handleSubmit}
        >
          Log In
        </Button>
      </form>
    </>
  )
}
