'use client'

import { Button, Input, Link } from '@nextui-org/react'
import { cookies } from 'next/headers'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const router = useRouter()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      credentials: 'include',
    })

    const responseData = await response.json()

    if (responseData.code === 400 || responseData.code === 400) {
      console.error(responseData.message)
      return
    }

    if (responseData.code === 201) {
      const oneWeekFromNow = new Date()
      oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7)

      document.cookie = `session_id=${responseData.accessToken}; expires=${oneWeekFromNow}; path=/; Secure; SameSite=Strict`

      router.push('/admin/products')
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
          color='primary'
          className='mt-4'
          onClick={handleSubmit}
          disabled={!formData.email && !formData.password}
        >
          Log In
        </Button>
      </form>
    </>
  )
}
