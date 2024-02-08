import { Link } from '@nextui-org/react'
import React from 'react'

export default function FormFooter() {
  return (
    <small className='mt-4 block'>
      Do not have an account?
      <span className='px-2'>|</span>
      <Link color='secondary' href='signup'>
        Join Hex now
      </Link>
    </small>
  )
}
