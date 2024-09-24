import { ReactElement } from 'react'

import { isValidElementOfType } from '@hex-utils/type-narrowing'

import { ModalContent } from './ModalContent'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'

interface ModalProps {
  isModalOpen: boolean
  children: [
    ReactElement<typeof ModalHeader>,
    ReactElement<typeof ModalContent>,
    ReactElement<typeof ModalFooter>?,
  ]
}

export const Modal = ({ isModalOpen, children }: ModalProps) => {
  if (!isModalOpen) return null

  const [header, content, footer] = children

  if (!isValidElementOfType(header, ModalHeader)) {
    throw new Error(
      'Invalid child element: Expected ModalHeader as the first child.',
    )
  }

  if (!isValidElementOfType(content, ModalContent)) {
    throw new Error(
      'Invalid child element: Expected ModalContent as the second child.',
    )
  }

  if (footer && !isValidElementOfType(footer, ModalFooter)) {
    throw new Error(
      'Invalid child element: Expected ModalFooter as the third child, if provided.',
    )
  }

  return (
    <div className='absolute z-20 top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-hex-950 bg-opacity-45 backdrop-blur-sm'>
      <div className='bg-background-start shadow-neumorphic rounded-xl p-4 h-3/6 w-1/3 flex flex-col'>
        {children}
      </div>
    </div>
  )
}
