import { FC, useEffect, useRef, useState } from 'react'

import { InputProps } from './types'

export const Input: FC<InputProps> = ({
  value,
  handleChange,
  name,
  type,
  required,
  label,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [hasContent, setHasContent] = useState<boolean>(false)

  const getLabelStyles = () =>
    hasContent
      ? '-translate-y-2 text-xs text-primary-foreground'
      : '-translate-y-0 text-primary'

  useEffect(() => {
    setHasContent(!!inputRef.current?.value)
  }, [value])

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <label className='relative w-full' htmlFor={name}>
        <input
          className='px-2 pt-6 pb-2 text-md text-primary outline-none border-none leading-5 rounded-lg duration-200 peer w-full autofill:focus:bg-red-500'
          type={type}
          name={name}
          ref={inputRef}
          value={value}
          onChange={handleChange}
        />
        <span
          className={`absolute top-4 left-2 tracking-wide capitalize pointer-events-none duration-200 peer-focus:text-primary-foreground peer-focus:-translate-y-2 peer-focus:text-xs ${getLabelStyles()}`}
        >
          {label}
          {required && <span className='text-danger'>*</span>}
        </span>
      </label>
    </div>
  )
}
