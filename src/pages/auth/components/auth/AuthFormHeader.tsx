'use client'

import { usePathname } from 'next/navigation'

import { HexIsoLogo } from '@hex-ui/icons'

const AuthFormHeader = () => {
  const pathname = usePathname()?.split('/')[2] ?? ''

  const title = () => {
    switch (pathname) {
      case 'signup':
        return 'Sign Up'
      case 'login':
        return 'Log In'
      default:
        return 'Sign Up'
    }
  }

  return (
    <>
      <i className='w-1/3 h-auto block mx-auto mb-3'>
        <HexIsoLogo />
      </i>
      <h1 className='font-extralight text-3xl text-center block mt-4'>
        {title()}
      </h1>
    </>
  )
}

export default AuthFormHeader
