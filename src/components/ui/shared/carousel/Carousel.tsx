import { Icon } from '@iconify/react'
import { Children, FC, ReactNode } from 'react'

import { Button } from '@hex-shared-components/button'

import { CarouselCard } from './CarouselCard'
import { CarouselProgress } from './CarouselProgress'

interface CarouselProps {
  children: ReactNode[]
  hideProgress?: boolean
  hideChevrons?: boolean
}

export const Carousel: FC<CarouselProps> = ({
  children,
  hideChevrons = false,
  hideProgress = false,
}) => {
  return (
    <>
      <div className='min-h-20 flex flex-row flex-nowrap overflow-clip relative'>
        <div className='absolute top-0 bottom-0 left-0 flex items-center justify-center w-auto'>
          {!hideChevrons && (
            <Button variant='icon' size='medium'>
              <Icon icon='tabler:chevron-left' />
            </Button>
          )}
        </div>
        {Children.map(children, (child) => (
          <CarouselCard>{child}</CarouselCard>
        ))}
        <div className='absolute top-0 bottom-0 right-0 flex items-center justify-center w-auto'>
          {!hideChevrons && (
            <Button variant='icon' size='medium'>
              <Icon icon='tabler:chevron-right' />
            </Button>
          )}
        </div>
      </div>
      {!hideProgress && <CarouselProgress />}
    </>
  )
}
