'use client'

import { usePathname } from 'next/navigation'

export default function Topbar() {
  const pathname = usePathname()

  const pageTitle = pathname?.split('/').pop()

  return (
    <header className='h-[4vh]'>
      <h1 className='capitalize text-4xl'>{pageTitle}</h1>
    </header>
  )
}
