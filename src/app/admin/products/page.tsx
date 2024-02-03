import ProductGrid from '@/app/ui/products/ProductGrid'
import { getData } from '@/app/services/ApiService'
import { Suspense } from 'react'

export default async function page() {
  const productList = await getData<any[]>('products')

  return (
    <Suspense>
      <ProductGrid productList={productList} />
    </Suspense>
  )
}
