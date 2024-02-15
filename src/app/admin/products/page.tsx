import ProductGrid from '@/ui/products/ProductGrid'
import { Input } from '@nextui-org/react'
import { Suspense } from 'react'

export default async function page() {
  return (
    <>
      <section>
        <Input />
      </section>
      <Suspense>
        <ProductGrid />
      </Suspense>
    </>
  )
}
