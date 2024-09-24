import { PropsWithChildren } from 'react'

export const ModalContent = ({ children }: PropsWithChildren) => {
  return <div className='h-full'>{children}</div>
}
