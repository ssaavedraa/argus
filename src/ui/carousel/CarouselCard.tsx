import { FC, PropsWithChildren } from 'react'

interface CarouselCardProps {}

export const CarouselCard: FC<PropsWithChildren<CarouselCardProps>> = ({
  children,
}) => {
  return (
    <div className='min-w-full snap-start flex flex-col items-center justify-center'>
      {children}
    </div>
  )
}
