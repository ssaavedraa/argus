import Sidebar from '@/ui/Sidebar/Sidebar'
import Topbar from '@/ui/Topbar/Topbar'
import { ReactNode } from 'react'

const AdminPanelLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className='w-screen h-screen flex flex-row flex-nowrap justify-center items-center'>
      <aside className=' w-2/12 h-full rounded-lg flex flex-col justify-between align-middle py-8'>
        <Sidebar />
      </aside>
      <div className='h-full w-[2px] bg-purple-950 bg-opacity-80'></div>
      <section className='w-10/12 h-full rounded-lg p-8 ml-2 overflow-clip'>
        <Topbar />
        {children}
      </section>
    </main>
  )
}

export default AdminPanelLayout
