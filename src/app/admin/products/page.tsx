import ProductGrid from '@/pages/admin/Products/ProductGrid/ProductGrid'
import { Suspense } from 'react'
import { getProductsData } from './actions'

export default async function page() {
  const products = await getProductsData()

  return (
    <>
      <Suspense>
        <ProductGrid products={products} />
      </Suspense>
    </>
  )
}
