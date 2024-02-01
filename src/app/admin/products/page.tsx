import ProductGrid from '@/ui/products/ProductGrid'
import ApiService from '@/services/ApiService'
import { Suspense } from 'react'

export default async function page() {
  const productList = await new ApiService().getData<any[]>('products')

  return (
    <Suspense>
      <ProductGrid productList={productList} />
    </Suspense>
  )
}
