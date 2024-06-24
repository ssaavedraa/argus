import { ReactNode } from 'react'

import { AuthFormFooter, AuthFormHeader } from '@hex-components/auth'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = (props: AuthLayoutProps) => {
  return (
    // TODO: Create Card component
    <div className='h-screen w-screen flex items-center lg:max-w-[1280px] mx-auto'>
      <div className='bg-purple-700 bg-opacity-30 lg:w-1/3 mx-auto rounded-2xl p-8'>
        <header>
          <AuthFormHeader />
        </header>
        <main>{props.children}</main>
        <footer>
          <AuthFormFooter />
        </footer>
      </div>
    </div>
  )
}

export default AuthLayout
