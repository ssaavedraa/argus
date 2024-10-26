import { ChangeEvent, KeyboardEvent } from 'react'

interface TypeaheadInputProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  // eslint-disable-next-line no-unused-vars
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
  value: string
}

export const TypeaheadInput = ({
  value,
  onChange,
  onKeyDown,
}: TypeaheadInputProps) => {
  return (
    <input
      type='text'
      value={value}
      placeholder='Start typing a category'
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}
