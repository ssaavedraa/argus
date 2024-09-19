import Link from 'next/link'
import { ReactNode } from 'react'

import { auth } from '@hex-auth'
import { HexIsoLogo } from '@hex-icons'

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth()

  return (
    <div className='h-screen max-h-screen w-screen flex flex-col overflow-hidden'>
      <header className='p-4 pb-0 flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center justify-start gap-6'>
          <i className='w-[120px] block'>
            <HexIsoLogo />
          </i>
          <ul className='flex flex-row gap-2'>
            <li className='rounded-2xl px-4 py-1'>Products</li>
            <li className='rounded-2xl px-4 py-1'>Account</li>
            <li className='rounded-2xl px-4 py-1'>
              <Link href='/admin/invite'>Invite</Link>
            </li>
            <li className='rounded-2xl px-4 py-1'>
              <Link href='/admin/dashboard/teams'>Teams</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>{session?.user?.name?.split(' ').slice(0, 2).join(' ')}</h1>
        </div>
      </header>
      <main className='flex-grow border border-hex-300 rounded-lg m-4 overflow-y-auto overflow-x-clip py-4'>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
