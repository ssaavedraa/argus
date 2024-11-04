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

      {title && <div className='text-2xl'>{title}</div>}

      <Button onClick={onClose}>
        <Icon icon='mdi:close' className='text-3xl' />
      </Button>
    </div>
  )
}
