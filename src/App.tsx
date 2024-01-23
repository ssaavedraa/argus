import { useEffect } from 'react'
import Table from './components/Table/Table'
import Icon from './components/icons/Icon'
import CreateProductForm from './forms/CreateProduct'
import { useApiService } from './hooks/useApiService'
import useModal from './hooks/useModal'
import AdminPanel from './layouts/AdminPanel'
import { HttpMethod } from './types'

function App() {
  const { isModalOpen, openModal } = useModal()
  const { data, fetchData } = useApiService<any[]>({
    method: HttpMethod.GET,
  })

  const columns = ['name', 'price', 'stock', 'actions']

  const mockData = data?.map(({ name, price, stock, productId }) => ({
    name,
    price,
    stock,
    productId,
  }))

  useEffect(() => {
    fetchData('products')
  }, [isModalOpen])

  return (
    <>
      <AdminPanel>
        <header className='w-full flex justify-between'>
          <h1 className='text-3xl font-semibold pb-2'>Products</h1>
          <button onClick={openModal}>
            <Icon name='plus' size='medium' />
          </button>
        </header>

        <div className='overflow-clip rounded-md relative'>
          <Table columns={columns} data={mockData} />
        </div>
      </AdminPanel>
      {isModalOpen && <CreateProductForm />}
    </>
  )
}

export default App
