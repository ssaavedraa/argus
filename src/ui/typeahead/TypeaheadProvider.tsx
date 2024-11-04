import { createContext, PropsWithChildren, useContext } from 'react'

interface TypeaheadContextProps {
  query: string
  isOpen: boolean
  inputPlaceholder: string
  required: boolean
  closeTypeahead: () => void
}

const TypeaheadContext = createContext<TypeaheadContextProps>(
  {} as TypeaheadContextProps,
)

export const useTypeaheadContext = () => {
  const context = useContext(TypeaheadContext)

  if (!context) {
    throw new Error(
      'useTypeaheadContext must be used within a TypeaheadProvider',
    )
  }

  return context
}

interface TypeaheadProviderProps extends PropsWithChildren {
  query: string
  isOpen: boolean
  inputPlaceholder: string
  required?: boolean
  closeTypeahead: () => void
}

export const TypeaheadProvider = (props: TypeaheadProviderProps) => {
  const {
    children,
    query,
    isOpen,
    closeTypeahead,
    inputPlaceholder,
    required = false,
  } = props

  return (
    <TypeaheadContext.Provider
      value={{
        query,
        isOpen,
        closeTypeahead,
        inputPlaceholder,
        required,
      }}
    >
      {children}
    </TypeaheadContext.Provider>
  )
}
