import { Button, ButtonGroup, Card, CardFooter, Image } from '@nextui-org/react'
import { Product } from '../types'

export default async function ProductGrid({
  products,
}: {
  products: Product[]
}) {
  return (
    <section className='scroll-m-1 overflow-y-scroll h-[90vh]'>
      <div className='flex flex-col md:grid md:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-8 gap-8 pb-8'>
        {products?.map(({ name, price, imageUrl, id }) => (
          <Card
            key={id}
            radius='md'
            className='border-none h-full'
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
      </div>
    </section>
  )
}
