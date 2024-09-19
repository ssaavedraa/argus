import { ReactNode, Suspense } from 'react'

import AuthFormFooter from '@hex-pages/auth/components/auth/AuthFormFooter'
import AuthFormHeader from '@hex-pages/auth/components/auth/AuthFormHeader'
import { Card, CardContent, CardFooter, CardHeader } from '@hex-ui/card'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <div className='h-screen w-screen flex items-center justify-center lg:max-w-[1280px] mx-auto'>
      <Card>
        <CardHeader>
          <header>
            <AuthFormHeader />
          </header>
        </CardHeader>
        <CardContent>
          <Suspense>
            <main>{props.children}</main>
          </Suspense>
        </CardContent>
        <CardFooter>
          <footer>
            <AuthFormFooter />
          </footer>
        </CardFooter>
      </Card>
    </div>
  )
}

export default AuthLayout
