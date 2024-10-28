import { ChangeEvent, KeyboardEvent } from 'react'

import { useTypeaheadContext } from './TypeaheadProvider'

interface TypeaheadInputProps {
  value: string
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  // eslint-disable-next-line no-unused-vars
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
}

export const TypeaheadInput = ({
  value,
  onChange,
  onKeyDown,
}: TypeaheadInputProps) => {
  const { openTypeahead } = useTypeaheadContext()

  return (
    <input
      className='w-full px-2 py-3 bg-hex-600 text-md placeholder:text-hex-50 tracking-wide outline-none shadow-lg rounded-lg'
      type='text'
      value={value}
      placeholder='Start typing a category'
      onChange={onChange}
      onKeyDown={onKeyDown}
      onFocus={openTypeahead}
    />
  )
}
