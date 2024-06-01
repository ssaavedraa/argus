import Topbar from '@/ui/Topbar/Topbar'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import Sidebar from '../../ui/Sidebar/Sidebar'

const AdminPanelLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const cookieStore = cookies()
  const session = cookieStore.get('session')

  if (!session) {
    redirect('/auth/login')
  }

  return (
    <main className='w-screen h-screen flex flex-row flex-nowrap items-center'>
      <aside className=' min-w-max h-full rounded-lg hidden lg:flex flex-col justify-between align-middle p-4'>
        <Sidebar />
      </aside>
      <div className='h-full w-[2px] bg-purple-950 bg-opacity-80'></div>
      <section className='h-full rounded-lg p-8 ml-2 overflow-hidden max-h-screen'>
        <Topbar />
        {children}
      </section>
    </main>
  )
}

export default AdminPanelLayout
