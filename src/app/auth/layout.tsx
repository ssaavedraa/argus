import HexIsoLogo from '@/ui/icons/HexIsoLogo'
import { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
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
