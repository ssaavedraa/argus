import { PropsWithChildren } from 'react'

export const ModalFooter = ({ children }: PropsWithChildren) => {
  return <div className='h-[calc((100%/12)*1)]'>{children}</div>
}
