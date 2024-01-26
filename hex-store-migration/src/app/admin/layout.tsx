import { ReactNode } from 'react'

const AdminPanelLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='w-5/6 h-5/6 flex gap-x-4'>
        <aside className='bg-[#343346] bg-opacity-50 w-2/12 h-full rounded-lg shadow-neumorphic' />
        <section className='w-10/12 bg-[#343346] bg-opacity-50 rounded-lg p-4 overflow-clip shadow-neumorphic'>
          {children}
        </section>
      </div>
    </main>
  )
}

export default AdminPanelLayout
