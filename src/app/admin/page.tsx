'use client'

import Products from '@/pages/Products'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

export default function Page() {
  const searchParams = useSearchParams()
  const view = searchParams?.get('view')
  console.debug('🚀 ~ Page ~ view:', view)

  const getPageView = () => {
    switch (view) {
      case 'product':
        return <Products />
      default:
        return <Products />
    }
  }

  return <Suspense>{getPageView()}</Suspense>
}
