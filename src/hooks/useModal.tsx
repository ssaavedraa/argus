import { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'

const useModal = () => {
  const { isModalOpen, closeModal, openModal } = useContext(ModalContext)

  return {
    isModalOpen,
    closeModal,
    openModal,
  }
}

export default useModal
