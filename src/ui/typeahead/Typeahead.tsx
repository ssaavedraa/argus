import {
  Children,
  cloneElement,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react'

import { isValidElementOfType } from '@hex-utils/type-narrowing'

import { TypeaheadInput } from './TypeaheadInput'
import { TypeaheadSuggestions } from './TypeaheadSuggestions'

interface TypeaheadProps {
  children: [
    ReactElement<typeof TypeaheadInput>,
    ReactElement<typeof TypeaheadSuggestions> | null,
  ]
  value: string
}

export const Typeahead = ({ children, value }: TypeaheadProps) => {
  const [input, suggestions] = children

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1)
  const typeAheadRef = useRef<HTMLDivElement | null>(null)

  if (!isValidElementOfType(input, TypeaheadInput)) {
    throw new Error('Typeahead must have a TypeaheadInput as its first child.')
  }

  if (suggestions && !isValidElementOfType(suggestions, TypeaheadSuggestions)) {
    throw new Error(
      'Typeahead can have an optional TypeaheadSuggestions as its second child.',
    )
  }

  // keyboard navigation
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || !suggestions) {
      return
    }

    const suggestionElements = Children.toArray(suggestions.props.children)
    const maxIndex = suggestionElements.length - 1

    switch (event.key) {
      case 'ArrowDown':
        setHighlightedIndex((prevIndex) =>
          prevIndex < maxIndex ? prevIndex + 1 : 0,
        )
        break
      case 'ArrowUp':
        setHighlightedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : maxIndex,
        )
        break
      case 'Escape':
        setIsOpen(false)
        break
      default:
        break
    }
  }

  // Debounce
  useEffect(() => {
    const debouncer = setTimeout(() => {
      if (value) {
        setIsOpen(true)
      }
    }, 300)

    return () => clearTimeout(debouncer)
  }, [value])

  // close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        typeAheadRef.current &&
        !typeAheadRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={typeAheadRef}>
      {cloneElement(input, {
        onKeyDown: handleKeyDown,
      })}
      {isOpen && suggestions && cloneElement(suggestions, { highlightedIndex })}
    </div>
  )
}
