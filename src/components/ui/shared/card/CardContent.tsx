import { FC, PropsWithChildren } from 'react'

interface CardContentProps {}

export const CardContent: FC<PropsWithChildren<CardContentProps>> = ({
  children,
}) => {
  return (
    <div className='max-h-[80vh] overflow-y-auto overflow-x-hidden px-2'>
      {children}
    </div>
  )
}
