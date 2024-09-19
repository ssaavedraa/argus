import React, { ButtonHTMLAttributes } from 'react'

import { Button } from '@hex-ui/button'
import { Spinner } from '@hex-ui/spinner'

import { useFormContext } from './FormProvider'

export const FormButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  disabled,
  ...props
}) => {
  const { isPending } = useFormContext()

  return (
    <Button
      // className='bg-accent text-hex-800 font-semibold px-5 py-2 rounded-md mt-4 w-full flex flex-row flex-nowrap justify-center items-center disabled:opacity-70 h-10'
      type='submit'
      disabled={isPending || disabled}
      {...props}
    >
      {isPending && <Spinner />}
      {children}
    </Button>
  )
}
