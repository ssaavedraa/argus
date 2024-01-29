import ApiService from '@/services/ApiService'
import { Button, ButtonGroup, Card, CardFooter, Image } from '@nextui-org/react'

export default async function Products() {
  const test = await new ApiService().getData<any[]>('')

  return (
    <div className='grid grid-cols-5 gap-8'>
      {test?.map(({ title, price, images }) => (
        <Card
          key={title}
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
            alt={title}
            loading='lazy'
            className='object-cover'
            fallbackSrc='https://via.placeholder.com/300x200'
            src={
              images[0] ||
              'https://nextui-docs-v2.vercel.app/images/album-cover.png'
            }
          />
          <CardFooter className='flex flex-col'>
            <div className='w-full flex flex-row items-center justify-between text-md mb-2'>
              <p className='w-full truncate font-bold'>{title}</p>
              <small className='opacity-50 ml-2'>${price}</small>
            </div>
            <ButtonGroup className='w-full' size='sm' variant='flat'>
              <Button>Edit</Button>
              <Button color='danger'>Delete</Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
