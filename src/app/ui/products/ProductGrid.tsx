import { Button, ButtonGroup, Card, CardFooter, Image } from '@nextui-org/react'
import { cookies } from 'next/headers'

async function getProductsData(authHeader?: string) {
  'use server'

  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://hex.santiagosaavedra.com.co'

  const response = await fetch(`${baseUrl}/products`, {
    headers: {
      Authorization: `Bearer ${authHeader}`,
      Cookie: `session_id=${authHeader}`,
    },
    credentials: 'include',
  })

  if (!response.ok) {
    throw new Error()
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
