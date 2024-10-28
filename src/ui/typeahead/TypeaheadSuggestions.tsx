import { Children, cloneElement, ReactElement } from 'react'

import { isValidElementOfType } from '@hex-utils/type-narrowing'

import { TypeaheadOption } from './TypeaheadOption'

interface TypeaheadSuggestionsProps {
  children:
    | ReactElement<typeof TypeaheadOption>
    | ReactElement<typeof TypeaheadOption>[]
  highlightedIndex?: number
}

export const TypeaheadSuggestions = ({
  children,
  highlightedIndex,
}: TypeaheadSuggestionsProps) => {
  return (
    <ul className='border-t-2 shadow-2xl absolute w-full z-50 rounded-b-lg overflow-clip'>
      {children &&
        Children.map(children, (child, index) => {
          if (!isValidElementOfType(child, TypeaheadOption)) {
            throw new Error(
              'Only TypeaheadOption is allowed as a child of TypeaheadSuggestions.',
            )
          }

          return cloneElement(child, {
            isHighlighted: index === highlightedIndex,
          })
        })}
    </ul>
  )
}
