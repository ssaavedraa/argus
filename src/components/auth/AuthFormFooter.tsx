'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface FooterProps {
  message: string
  cta: {
    message: string
    href: string
  }
}

export default function AuthFormFooter() {
  const pathname = usePathname()?.split('/')[2] ?? ''
  const [footerProps, setFooterProps] = useState<FooterProps>({
    message: 'Already a Hex member?',
    cta: {
      message: 'Join Hex now',
      href: 'signup',
    },
  })

  const getFooterProps = () => {
    switch (pathname) {
      case 'signup':
        return {
          message: 'Already a Hex member?',
          cta: {
            message: 'Log In',
            href: 'login',
          },
        }
      case 'login':
        return {
          message: 'Do not have an account?',
          cta: {
            message: 'Join Hex now',
            href: 'signup',
          },
        }
      default:
        return {
          message: 'Do not have an account?',
          cta: {
            message: 'Join Hex now',
            href: 'signup',
          },
        }
    }
  }

  useEffect(() => {
    setFooterProps(getFooterProps())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <small className='mt-4 block text-center'>
      {footerProps.message}
      <span className='px-2'>|</span>
      <Link className='text-accent' href={footerProps.cta.href}>
        {footerProps.cta.message}
      </Link>
    </small>
  )
}
