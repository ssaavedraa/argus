import { Button, ButtonGroup, Card, CardFooter, Image } from '@nextui-org/react'
import { cookies } from 'next/headers'

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL

async function getProductsData(authHeader?: string) {
  const response = await fetch(`${apiUrl}/products`, {
    headers: {
      Authorization: `Bearer ${authHeader}`,
    },
    credentials: 'include',
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message)
  }

  return response.json()
}

export default async function ProductGrid() {
  const cookieStore = cookies()
  const session_id = cookieStore.get('session_id')?.value

  const productList: any[] = await getProductsData(session_id)

  return (
    <section className='grid grid-cols-5 gap-8'>
      {productList?.map(({ name, price, imageUrl }) => (
        <Card
          key={name}
          radius='md'
          className='border-none'
          classNames={{
            base: 'bg-purple-950 bg-opacity-30',
          }}
        >
          <Image
            width={300}
            height={300}
            removeWrapper
            alt={name}
            loading='lazy'
            className='object-cover'
            fallbackSrc='https://via.placeholder.com/300x200'
            src={imageUrl}
          />
          <CardFooter className='flex flex-col'>
            <section className='w-full flex flex-row items-center justify-between text-md mb-2'>
              <p className='w-full truncate font-bold'>{name}</p>
              <small className='opacity-50 ml-2'>${price}</small>
            </section>
            <ButtonGroup className='w-full' size='sm' variant='flat'>
              <Button>Edit</Button>
              <Button color='danger'>Delete</Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}
