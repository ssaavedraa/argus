'use client'

import { Button } from '@nextui-org/react'

export default function LogoutButton({
  handleLogout,
}: {
  handleLogout: () => void
}) {
  return (
    <Button
      className='w-full'
      color='primary'
      variant='light'
      onClick={async () => {
        await handleLogout()
      }}
    >
      Log out
    </Button>
  )
}