import HexIsoLogo from '@/app/ui/icons/HexIsoLogo'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
  const cookieStore = cookies()
  const session_id = cookieStore.get('session_id')

  if (session_id) {
    redirect('/admin/dashboard')
  }
  return (
    <main className='h-screen w-screen flex items-center'>
      <section className=' bg-purple-700 bg-opacity-30 w-1/3 mx-auto rounded-2xl shadow-neumorphic p-8'>
        <i className='w-1/3 h-auto block mx-auto mb-3'>
          <HexIsoLogo />
        </i>
        {children}
      </section>
    </main>
  )
}
