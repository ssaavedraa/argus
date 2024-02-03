'use client'

import { usePathname } from 'next/navigation'

export default function Topbar() {
  const pathname = usePathname()

  const pageTitle = pathname?.split('/').pop()

  return (
    <div>
      <h1 className='capitalize text-4xl pb-6'>{pageTitle}</h1>
    </div>
  )
}
