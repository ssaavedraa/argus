import List from './components/List'
import ListItem from './components/ListItem'
import { useApiService } from './hooks/useApiService'
import { HttpMethod } from './types'

function App() {
  const { data } = useApiService<any[]>('http://localhost:3000/products', {
    method: HttpMethod.GET,
  })

  return (
    <>
      <main className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="w-5/6 h-5/6 flex gap-x-4">
          <div className="bg-[#343346] bg-opacity-50 w-2/12 h-full rounded-lg"></div>
          <div className="w-10/12 bg-[#343346] bg-opacity-50 rounded-lg p-4 overflow-clip">
            <h1 className="text-3xl font-semibold pb-2">Products</h1>
            <ul className="flex flex-row justify-between m-4">
              <li className="w-5/12 text-center">Product name</li>
              <li className="w-2/12 text-center">Price</li>
              <li className="w-2/12 text-center">Stock</li>
              <li className="w-3/12 text-center">Actions</li>
            </ul>
            <List>
              {data?.map(({ name, price, stock, productId }) => (
                <ListItem name={name} price={price} stock={stock} key={productId}/>
                ))}
            </List>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
