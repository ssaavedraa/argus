import { Link } from '@nextui-org/react'

export default function FormFooter() {
  return (
    <small className='flex flex-row flex-nowrap'>
      Already a Hex member?
      <span className='px-2'>|</span>
      <Link color='secondary' href='login' size='sm'>
        Log In
      </Link>
    </small>
  )
}
