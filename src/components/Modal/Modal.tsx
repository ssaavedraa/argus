import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import useModal from '../../hooks/useModal'
import { ModalProps, Size } from '../../types'
import Icon from '../icons/Icon'

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  actions,
  size = 'small',
}) => {
  const { closeModal, isModalOpen } = useModal()

  const modalSize: Record<Size, string> = {
    small: 'w-3/6',
    medium: 'w-4/6',
    large: 'w-5/6',
  }
  const getSize = () => modalSize[size]

  const { t } = useTranslation()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyPress)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return isModalOpen
    ? createPortal(
        <div className='w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm absolute top-0 flex justify-center items-center shadow-neumorphic'>
          <div
            className={`bg-[#232230] rounded-xl p-4 relative min-h-30 ${getSize()}`}
          >
            <header className='max-w-[90%] w-full'>
              <h1 className='inline-block h-8 text-2xl font-semibold'>
                {t(title)}
              </h1>
              <button className='absolute top-4 right-4' onClick={closeModal}>
                <Icon size='medium' name='close' />
              </button>
            </header>
            <main>{children}</main>
            <footer className='w-full pt-6'>{actions}</footer>
          </div>
        </div>,
        document.getElementById('portal')!,
      )
    : null
}

export default Modal
