import { forwardRef, InputHTMLAttributes } from 'react'

import { useTypeaheadContext } from './TypeaheadProvider'

interface TypeaheadInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TypeaheadInput = forwardRef<HTMLInputElement, TypeaheadInputProps>(
  ({ onChange, onKeyDown, name, defaultValue, onFocus, onBlur }, ref) => {
    const { query, inputPlaceholder, required } = useTypeaheadContext()

    return (
      <label htmlFor={name}>
        <span className='px-2 capitalize'>
          {inputPlaceholder}
          {required && <span className='text-danger'>*</span>}
        </span>
        <input
          className='w-full mt-1 px-2 py-3 bg-hex-600 text-md leading-5 placeholder:text-hex-50 tracking-wide outline-none shadow-neumorphic-dark rounded-lg'
          type='text'
          value={query}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          defaultValue={defaultValue}
          ref={ref}
        />
      </label>
    )
  },
)

TypeaheadInput.displayName = 'TypeaheadInput'
