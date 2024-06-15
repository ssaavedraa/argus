'use client'

import LogoutIcon from '@mui/icons-material/Logout'
import { Button } from '@nextui-org/react'

export default function LogoutButton({
  handleLogout,
}: {
  handleLogout: () => Promise<void>
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
      <LogoutIcon />
    </Button>
  )
}
