import ApiService from '@/services/ApiService'
import Icon from '@/ui/icons/Icon'
import { Button, ButtonGroup, Card, CardFooter, Image } from '@nextui-org/react'

export default async function Home() {
  const test = await new ApiService().getData<any[]>('')

  return (
    <>
      <header className='w-full flex justify-between items-center'>
        <h1 className='text-5xl font-semibold pb-6'>Products</h1>
        <button className='p-2 flex items-center'>
          <Icon name='plus' size='medium' />
        </button>
      </header>

      <div className='h-full overflow-scroll'>
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
                removeWrapper
                className='object-cover'
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
      </div>
    </>
  )
}
