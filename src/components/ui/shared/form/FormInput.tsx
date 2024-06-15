import { InputHTMLAttributes, forwardRef } from 'react'

import { useFormContext } from './FormProvider'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (props, ref) => {
    const { name, ...rest } = props

    const { isPending } = useFormContext()

    return (
      <input
        className='px-2 pt-6 pb-2 text-md text-primary outline-none border-none leading-5 rounded-lg duration-200 peer w-full bg-hex-600 shadow-lg autofill:focus:text-hex-900'
        id={name}
        name={name}
        disabled={isPending}
        ref={ref}
        {...rest}
      />
    )
  },
)

FormInput.displayName = 'FormInput'
