import { InputHTMLAttributes, forwardRef } from 'react'

import { useFormContext } from './FormProvider'

interface FormInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  variant?: 'text-top' | 'animated'
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (props, ref) => {
    const { name, variant = 'animated', ...rest } = props

    const { isPending } = useFormContext()

    const styleVariants = {
      animated:
        'px-2 pt-6 pb-2 text-md outline-none border-none leading-5 rounded-lg duration-200 peer w-full bg-hex-600 shadow-lg autofill:focus:text-hex-900',
      'text-top':
        'p-3 mt-1 text-md outline-none border-none leading-5 rounded-lg w-full bg-hex-600 shadow-lg',
    }

    return (
      <input
        className={styleVariants[variant]}
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
