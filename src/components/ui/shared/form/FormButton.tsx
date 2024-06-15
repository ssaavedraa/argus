import React, { ButtonHTMLAttributes } from 'react'

import { Spinner } from '@hex-shared-components/spinner'

import { useFormContext } from './FormProvider'

export const FormButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  const { isPending } = useFormContext()

  return (
    <button
      className='bg-accent text-hex-800 font-semibold px-5 py-2 rounded-md mt-4 w-full flex flex-row flex-nowrap justify-center items-center disabled:opacity-70 h-10'
      type='submit'
      disabled={isPending}
      {...props}
    >
      {isPending && <Spinner />}
      {children}
    </button>
  )
}
