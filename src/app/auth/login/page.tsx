'use client'

import { Button, Input, Link } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { Login } from './actions'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData((prevState) => ({
      ...prevState,
      [name]: value.toLowerCase(),
    }))
  }

  return (
    <>
      <h1 className='text-3xl pb-6 text-center'>Log In</h1>
      <form className='flex flex-col items-center gap-4' action={Login}>
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
          type='submit'
          color='primary'
          className='mt-4'
          disabled={!formData.email && !formData.password}
        >
          Log In
        </Button>
      </form>
    </>
  )
}
