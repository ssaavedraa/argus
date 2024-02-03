'use client'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export default function LogoutButton() {
  const router = useRouter()
  const handleLogout = async () => {
    await fetch(`${apiUrl}/auth/logout`, {
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
