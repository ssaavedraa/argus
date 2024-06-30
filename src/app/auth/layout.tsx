import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from 'components/ui/shared/card'
import { ReactNode, Suspense } from 'react'

import { AuthFormFooter, AuthFormHeader } from '@hex-components/auth'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <div className='h-screen w-screen flex items-center lg:max-w-[1280px] mx-auto'>
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
