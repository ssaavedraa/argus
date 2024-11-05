import { Icon } from '@iconify/react/dist/iconify.js'
import { ReactNode, useEffect } from 'react'

import { Button } from '@hex-ui/button'

interface ModalHeaderProps {
  title: string
  backButton?: ReactNode
  onClose: () => void
}

export const ModalHeader = ({
  onClose,
  title,
  backButton = null,
}: ModalHeaderProps) => {
  useEffect(() => {
    const handleKeydownEvent = (event: KeyboardEvent) => {
      if (event.key == 'Escape') {
        onClose()
      }
    }
    window?.addEventListener('keydown', handleKeydownEvent)

    return () => {
      window?.removeEventListener('keydown', handleKeydownEvent)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={`flex flex-row ${title ? 'justify-between' : 'justify-end'} capitalize font-semibold tracking-wide h-[calc((100%/12)*1)]`}
    >
      {backButton}

      {title && <span className='text-2xl py-1'>{title}</span>}

      <Button
        onClick={onClose}
        variant='icon'
        className='p-1 hover:text-hex-350 rounded-md h-10 w-10 flex justify-center'
      >
        <Icon icon='mdi:close' className='text-3xl text-center' />
      </Button>
    </div>
  )
}
