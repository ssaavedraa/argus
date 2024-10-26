import { FC } from 'react'

interface CarouselProgressProps {}

export const CarouselProgress: FC<CarouselProgressProps> = () => {
  return (
    <>
      <div className='bg-purple-950 block w-full h-2 rounded-full shadow-inner mt-2'>
        <div className='bg-hex-500 block h-full w-1/4 rounded-full shadow-neumorphic-dark' />
      </div>
    </>
  )
}
