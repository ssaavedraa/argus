import Table from '@/ui/Table/Table'
import Icon from '@/ui/icons/Icon'
import { Suspense } from 'react'
import { Product } from './types'

export default async function Home() {
  const columns = ['name', 'price', 'stock']

  return (
    <>
      <header className='w-full flex justify-between items-center'>
        <h1 className='text-3xl font-semibold pb-2'>products</h1>
        <button className='p-2 flex items-center'>
          <Icon name='plus' size='medium' />
        </button>
      </header>

      <div className='overflow-clip rounded-md relative'>
        <Suspense>
          <Table<Product> dataSource='products' columns={columns} />
        </Suspense>
      </div>
    </>
  )
}
