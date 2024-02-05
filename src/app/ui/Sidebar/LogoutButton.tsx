'use client'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()
  const handleLogout = async () => {
    const baseUrl =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://hex.santiagosaavedra.com.co'

    await fetch(`${baseUrl}/auth/logout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

    router.push('/')
  }
  return (
    <Button
      className='w-full'
      color='primary'
      variant='light'
      onClick={handleLogout}
    >
      Log out
    </Button>
  )
}
