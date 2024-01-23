import { useEffect } from 'react'
import Table from './components/Table/Table'
import Icon from './components/icons/Icon'
import CreateProductForm from './forms/CreateProduct'
import { useApiService } from './hooks/useApiService'
import useModal from './hooks/useModal'
import AdminPanel from './layouts/AdminPanel'
import { HttpMethod, ProductTableData } from './types'

function App() {
  const { isModalOpen, openModal } = useModal()
  const { data, fetchData } = useApiService<ProductTableData>({
    method: HttpMethod.GET,
  })

  const { columns, tableData } = data || ({} as ProductTableData)

  useEffect(() => {
    fetchData('layout/products-table')
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
          <Table columns={columns} tableData={tableData} />
        </div>
      </AdminPanel>
      {isModalOpen && <CreateProductForm />}
    </>
  )
}

export default App
