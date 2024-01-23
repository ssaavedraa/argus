import { ReactNode, createContext, useState } from 'react'
import { ModalContextProps } from '../types'

const defaultValues: ModalContextProps = {
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
}
export const ModalContext = createContext<ModalContextProps>(defaultValues)

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => setIsModalOpen(false)
  const openModal = () => setIsModalOpen(true)

  const contextValues: ModalContextProps = {
    isModalOpen,
    openModal,
    closeModal,
  }

  return (
    <ModalContext.Provider value={contextValues}>
      {children}
    </ModalContext.Provider>
  )
}
