import ProductGrid from '@/pages/admin/Products/ProductGrid/ProductGrid'
import { Suspense } from 'react'

export default async function page() {
  return (
    <>
      <Suspense>
        <ProductGrid />
      </Suspense>
    </>
  )
}
