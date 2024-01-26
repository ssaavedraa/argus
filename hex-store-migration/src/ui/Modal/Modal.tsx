'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import Icon from '../icons/Icon'
import { ModalProps } from './types'

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  actions,
  size = 'small',
}) => {
  const searchParams = useSearchParams()

  const dialogRef = useRef<null | HTMLDialogElement>()

  const modalSize = {
    small: 'w-3/6',
    medium: 'w-4/6',
    large: 'w-5/6',
  }

  const getSize = () => modalSize[size]

  const showDialog = searchParams.get('showDialog')

  const closeModal = () => {
    dialogRef.current?.close()
  }

  useEffect(() => {
    if (showDialog === 'yes') {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [showDialog])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    if (showDialog) {
      window.addEventListener('keydown', handleKeyPress)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  const dialog: JSX.Element | null = showDialog ? (
    <dialog className='w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm absolute top-0 flex justify-center items-center shadow-neumorphic'>
      <div
        className={`bg-[#232230] rounded-xl p-4 relative min-h-30 ${getSize()}`}
      >
        <header className='max-w-[90%] w-full'>
          <h1 className='inline-block h-8 text-2xl font-semibold'>{title}</h1>
          <button className='absolute top-4 right-4' onClick={closeModal}>
            <Icon size='medium' name='close' />
          </button>
        </header>
        <main>{children}</main>
        <footer className='w-full pt-6'>{actions}</footer>
      </div>
    </dialog>
  ) : null

  return dialog
}

export default Modal
