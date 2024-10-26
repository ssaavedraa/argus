import { Children, cloneElement, ReactElement } from 'react'

import { isValidElementOfType } from '@hex-utils/type-narrowing'

import { TypeaheadOption } from './TypeaheadOption'

interface TypeaheadSuggestionsProps {
  children: ReactElement<typeof TypeaheadOption>[]
  highlightedIndex?: number
}

export const TypeaheadSuggestions = ({
  children,
  highlightedIndex,
}: TypeaheadSuggestionsProps) => {
  return (
    <ul>
      {Children.map(children, (child, index) => {
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