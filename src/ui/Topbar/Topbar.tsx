'use client'

import { usePathname } from 'next/navigation'

export default function Topbar() {
  const pathname = usePathname()

  const pageTitle = pathname?.split('/').pop()

  return (
    <div className='h-[7vh]'>
      <h1 className='capitalize text-4xl'>{pageTitle}</h1>
    </div>
  )
}
