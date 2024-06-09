'use client'
import { HexIsoLogo } from '@hex-icons'
import { usePathname } from 'next/navigation'

export default function AuthFormHeader() {
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
      <h1 className='font-extralight text-3xl text-center block mt-4 mb-6'>
        {title()}
      </h1>
    </>
  )
}
