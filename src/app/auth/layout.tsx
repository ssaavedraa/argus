import { Card } from 'components/ui/shared/card/Card'
import { CardContent } from 'components/ui/shared/card/CardContent'
import { CardFooter } from 'components/ui/shared/card/CardFooter'
import { CardHeader } from 'components/ui/shared/card/CardHeader'
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
