import Icon from './components/icons/Icon'
import Table from './components/Table/Table'
import TableRow from './components/Table/TableRow'
import { useApiService } from './hooks/useApiService'
import AdminPanel from './layouts/AdminPanel'
import { HttpMethod } from './types'

function App() {
  const { data } = useApiService<any[]>('http://localhost:3000/products', {
    method: HttpMethod.GET,
  })

  const columns = ['name', 'price', 'stock', 'actions']

  const mockData = data?.map(({ name, price, stock, productId }) => ({
    name,
    price,
    stock,
    productId,
  }))

  return (
    <>
      <AdminPanel>
        <header className='w-full flex justify-between'>
          <h1 className='text-3xl font-semibold pb-2'>Products</h1>
          <button>
            <Icon name='plus' size='medium' />
          </button>
        </header>

        <div className='overflow-clip rounded-md relative'>
          <Table columns={columns} data={mockData} />
        </div>
      </AdminPanel>
    </>
  )
}

export default App
