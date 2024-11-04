import { KeyboardEvent, useEffect, useRef, useState } from 'react'

import { Spinner } from '@hex-ui/spinner'

import { TypeaheadInput } from './TypeaheadInput'
import { TypeaheadOption } from './TypeaheadOption'
import { TypeaheadProvider } from './TypeaheadProvider'
import { TypeaheadSuggestions } from './TypeaheadSuggestions'

interface TypeaheadProps {
  query: string
  name: string
  inputPlaceholder: string
  defaultValue?: string
  required?: boolean
  // eslint-disable-next-line no-unused-vars
  onChange: (event: any) => void
  // eslint-disable-next-line no-unused-vars
  fetchSuggestions: (query: string, signal: AbortSignal) => Promise<string[]>
  // eslint-disable-next-line no-unused-vars
  onAddNewOption?: (query: string) => void
}

export const Typeahead = ({
  query,
  fetchSuggestions,
  onChange,
  name,
  inputPlaceholder,
  required = false,
  defaultValue,
  // TODO: onAddNewOption,
}: TypeaheadProps) => {
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const typeAheadRef = useRef<HTMLDivElement | null>(null)
  const typeAheadInputRef = useRef<HTMLInputElement | null>(null)

  const closeTypeahead = () => setIsOpen(false)

  // keyboard navigation
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || !suggestions) {
      return
    }

    const maxIndex = suggestions.length - 1

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
    const abortController = new AbortController()

    const debouncer = setTimeout(async () => {
      if (suggestions.includes(query)) {
        return
      }

      if (query && isOpen) {
        setIsLoading(true)
        if (typeAheadInputRef.current?.contains(document.activeElement)) {
          setIsOpen(true)
        }

        try {
          const results = await fetchSuggestions(query, abortController.signal)

          setSuggestions(results)
          setIsLoading(false)
        } catch (error) {
          if ((error as any)?.name === 'AbortError') {
            console.log('Fetch Aborted')
          } else {
            console.error('Error fetching suggestions:', error)
          }

          setIsLoading(false)
        }
      } else {
        setSuggestions([])
        setIsOpen(false)
      }
    }, 300)

    return () => {
      clearTimeout(debouncer)
      abortController.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, fetchSuggestions, isOpen])

  // Handle focus and blur events
  const handleFocus = () => {
    if (query) {
      setIsOpen(true)
    }
  }

  const handleBlur = () => {
    // Delay closing to allow click events on suggestions
    setTimeout(() => {
      if (!typeAheadInputRef.current?.contains(document.activeElement)) {
        setIsOpen(false)
      }
    }, 300)
  }

  // close suggestions
  useEffect(() => {
    if (!typeAheadInputRef.current) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        typeAheadRef.current &&
        !typeAheadRef.current.contains(event.target as Node)
      ) {
        setTimeout(() => {
          setIsOpen(false)
        }, 300)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={typeAheadRef} className='relative rounded-lg'>
      <TypeaheadProvider
        query={query}
        isOpen={isOpen}
        closeTypeahead={closeTypeahead}
        inputPlaceholder={inputPlaceholder}
        required={required}
      >
        <TypeaheadInput
          onChange={onChange}
          onKeyDown={handleKeyDown}
          name={name}
          defaultValue={defaultValue}
          ref={typeAheadInputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {isOpen &&
          (isLoading && suggestions.length === 0 ? (
            <div className='bg-hex-650 flex rounded-b-lg overflow-clip mt-[-4px]'>
              <div className='mx-auto h-8 m-2'>
                <Spinner />
              </div>
            </div>
          ) : (
            <TypeaheadSuggestions highlightedIndex={highlightedIndex}>
              {[
                ...suggestions?.map((suggestion, index) => (
                  <TypeaheadOption
                    key={index}
                    value={suggestion}
                    isHighlighted={index === highlightedIndex}
                    onSelect={onChange}
                  />
                )),
                <TypeaheadOption
                  key={query}
                  value={query}
                  isHighlighted={false}
                  onSelect={onChange}
                  newOptionPlacehoder='Add new role'
                  isNewOption
                />,
              ]}
            </TypeaheadSuggestions>
          ))}
      </TypeaheadProvider>
    </div>
  )
}
