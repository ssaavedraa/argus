import { Icon } from '@iconify/react/dist/iconify.js'
import { MouseEvent } from 'react'

import { useTypeaheadContext } from './TypeaheadProvider'

interface TypeaheadOptionProps {
  value: string
  // eslint-disable-next-line no-unused-vars
  onSelect: (event: MouseEvent<HTMLElement>) => void
  isHighlighted?: boolean
  isNewOption?: boolean
  newOptionPlacehoder?: string
}

export const TypeaheadOption = ({
  value,
  onSelect,
  newOptionPlacehoder,
  isNewOption = false,
  isHighlighted = false,
}: TypeaheadOptionProps) => {
  const { closeTypeahead } = useTypeaheadContext()
  const handleOptionSelection = (event: any) => {
    if (event) {
      onSelect(event)
    }
    closeTypeahead()
  }

  if (isNewOption) {
    return (
      <li
        className={`hover:bg-hex-150 hover:text-hex-700 hover:cursor-pointer p-2 flex flex-row flex-nowrap justify-between items-center ${isHighlighted ? 'bg-hex-150 text-hex-700' : 'bg-hex-450 text-hex-150'}`}
        onClick={handleOptionSelection}
        data-value={value}
      >
        <div className='flex flex-col'>
          <p className='font-semibold leading-5'>{newOptionPlacehoder}</p>
          <p className='font-light text-sm'>{value}</p>
        </div>
        <div className='h-full'>
          <Icon icon='gridicons:create' className='h-full text-3xl' />
        </div>
      </li>
    )
  }

  return (
    <li
      className={`hover:bg-hex-150 hover:text-hex-700 hover:cursor-pointer p-2 py-1 ${isHighlighted ? 'bg-hex-150 text-hex-700' : 'bg-hex-650 text-hex-150'}`}
      onClick={handleOptionSelection}
      data-value={value}
    >
      {value}
    </li>
  )
}
