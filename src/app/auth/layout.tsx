import HexIsoLogo from '@/shared-ui/icons/HexIsoLogo'
import { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
  // const cookieStore = cookies()
  // const session_id = cookieStore.get('session_id')

  // if (session_id) {
  //   redirect('/admin/products')
  // }

  return (
    <main className='h-screen w-screen flex items-center lg:max-w-[1280px] mx-auto'>
      <section className=' bg-purple-700 bg-opacity-30 lg:w-1/3 mx-auto rounded-2xl shadow-neumorphic p-8'>
        <i className='w-1/3 h-auto block mx-auto mb-3'>
          <HexIsoLogo />
        </i>
        {children}
      </section>
    </main>
  )
}
