import Icon from '@/ui/icons/Icon'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Image,
} from '@nextui-org/react'

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

      <div className='grid grid-cols-5 gap-4'>
        <Card
          radius='md'
          className='border-none'
          classNames={{
            base: 'bg-purple-950 bg-opacity-30',
          }}
        >
          <Image
            className='object-cover'
            src='https://nextui-docs-v2.vercel.app/images/album-cover.png'
          />
          <CardFooter className='flex flex-col'>
            <div className='w-full flex flex-row items-center justify-between text-md mb-2'>
              <p className='w-full truncate font-bold'>Test Product</p>
              <small className='opacity-50'>$10.00</small>
            </div>
            <ButtonGroup className='w-full' size='sm' variant='flat'>
              <Button>Edit</Button>
              <Button color='danger'>Delete</Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card
          radius='md'
          className='border-none'
          classNames={{
            base: 'bg-purple-950 bg-opacity-30',
          }}
        >
          <Image
            className='object-cover'
            src='https://nextui-docs-v2.vercel.app/images/album-cover.png'
          />
          <CardFooter className='flex flex-col'>
            <div className='w-full flex flex-row items-center justify-between text-md mb-2'>
              <p className='w-full truncate font-bold'>Test Product</p>
              <small className='opacity-50'>$10.00</small>
            </div>
            <div className='w-full flex flex-row flex-nowrap justify-evenly'>
              <Button size='sm' variant='shadow' color='primary'>
                Edit
              </Button>
              <Button size='sm' color='danger'>
                Delete
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card
          radius='md'
          className='border-none'
          classNames={{
            base: 'bg-purple-950 bg-opacity-30',
          }}
        >
          <CardBody>
            <Image
              isBlurred
              className='object-cover'
              src='https://nextui-docs-v2.vercel.app/images/album-cover.png'
            />
          </CardBody>
          <CardFooter className='flex flex-col'>
            <div className='w-full flex flex-row items-center justify-between text-md mb-2'>
              <p className='w-full truncate font-bold'>Test Product</p>
              <small className='opacity-50'>$10.00</small>
            </div>
            <ButtonGroup className='w-full' size='sm' variant='flat'>
              <Button>Edit</Button>
              <Button color='danger'>Delete</Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card
          radius='md'
          className='border-none relative'
          classNames={{
            base: 'bg-purple-950 bg-opacity-30',
          }}
        >
          <Image
            removeWrapper
            className='h-full object-cover'
            src='https://nextui-docs-v2.vercel.app/images/album-cover.png'
          />
          <div className='absolute z-10 bg-black bg-opacity-20 w-full h-full p-4 flex flex-col justify-end'>
            <div className='w-full flex flex-col items-start text-md mb-2 [text-shadow:_0_3px_5px_rgba(0,_0,_0,_0.3)]'>
              <p className='w-full truncate font-bold'>Test Product</p>
              <small className='opacity-80'>$10.00</small>
            </div>
            <div className='w-full flex flex-row flex-nowrap justify-evenly'>
              <Button size='sm' variant='shadow' color='primary'>
                Edit
              </Button>
              <Button size='sm' color='danger'>
                Delete
              </Button>
            </div>
          </div>
        </Card>
        {/* <Suspense>
          <Table<Product> dataSource='products' columns={columns} />
        </Suspense> */}
      </div>
    </>
  )
}
