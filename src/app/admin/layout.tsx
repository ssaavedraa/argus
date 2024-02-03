import Topbar from '@/app/ui/Topbar/Topbar'
import { ReactNode } from 'react'
import Sidebar from '../ui/Sidebar/Sidebar'

const AdminPanelLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className='w-screen h-screen flex flex-row flex-nowrap justify-center items-center'>
      <aside className=' min-w-max h-full rounded-lg flex flex-col justify-between align-middle p-4'>
        <Sidebar />
      </aside>
      <div className='h-full w-[2px] bg-purple-950 bg-opacity-80'></div>
      <section className='h-full rounded-lg p-8 ml-2 overflow-clip'>
        <Topbar />
        {children}
      </section>
    </main>
  )
}

export default AdminPanelLayout
