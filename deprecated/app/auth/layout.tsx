'use client'

import AuthFormFooter from '@/components/auth/AuthFormFooter'
import AuthFormHeader from '@/components/auth/AuthFormHeader'
import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  // const cookieStore = cookies()
  // const session_id = cookieStore.get('session_id')

  // if (session_id) {
  //   redirect('/admin/products')
  // }
  // const pathname = usePathname()

  return (
    <div>
      <div className=' bg-purple-700 bg-opacity-30 lg:w-1/3 mx-auto rounded-2xl shadow-neumorphic p-8'>
        <header>
          <AuthFormHeader />
        </header>
        <main>
          {children}
          {/* <small className='mt-4 block text-center'>
            {pathname?.includes('login')
              ? 'Do not have an account?'
              : 'Already a Hex member?'}
            <span className='px-2'>|</span>
            <Link color='secondary' href='signup'>
              Join Hex now
            </Link>
          </small> */}
        </main>
        <footer>
          <AuthFormFooter />
        </footer>
      </div>
    </div>
  )
}
