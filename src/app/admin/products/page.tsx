import ProductGrid from '@/ui/products/ProductGrid'
import { Suspense } from 'react'

export default async function page() {
  return (
    <Suspense>
      <ProductGrid />
    </Suspense>
  )
}
