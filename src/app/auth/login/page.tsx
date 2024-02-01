import { Button, Input, Link } from '@nextui-org/react'

export default function page() {
  return (
    <>
      <h1 className='text-3xl pb-6 text-center'>Log In</h1>
      <form className='flex flex-col items-center gap-4'>
        <Input
          type='email'
          label='Email'
          color='secondary'
          variant='flat'
          size='sm'
          className='w-5/6'
          isRequired
        />
        <Input
          type='password'
          label='password'
          color='secondary'
          variant='flat'
          size='sm'
          className='w-5/6'
          isRequired
        />
        <small>
          Do not have an account?
          <span className='px-2'>|</span>
          <Link color='secondary' href='signup'>
            Join Hex now
          </Link>
        </small>
        <Button variant='solid' color='primary' className='mt-4'>
          Log In
        </Button>
      </form>
    </>
  )
}
