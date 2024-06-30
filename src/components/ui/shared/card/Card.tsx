import {
  Children,
  FC,
  PropsWithChildren,
  ReactNode,
  isValidElement,
} from 'react'

import { CardContent } from './CardContent'
import { CardFooter } from './CardFooter'
import { CardHeader } from './CardHeader'

interface CardProps {
  classname?: string
}

export const Card: FC<PropsWithChildren<CardProps>> = ({ children }) => {
  const allowedChildrenTypes = [CardHeader, CardContent, CardFooter]

  const isAllowedType = (child: ReactNode) =>
    isValidElement(child)
      ? allowedChildrenTypes.some((type) => child.type === type)
      : false

  const validateChildren = Children.map(children, (child) => {
    if (isAllowedType(child)) {
      return child
    } else {
      throw new Error(
        'Invalid child component passed to Card. Only CardHeader, CardBody, and CardFooter are allowed.',
      )
    }
  })

  // w-1/3 m-auto rounded-xl flex flex-col items-center gap-4 bg-purple-700 bg-opacity-30 p-4 drop-shadow-lg
  return (
    <div className='bg-purple-700 bg-opacity-30 lg:w-1/3 mx-auto rounded-xl p-4 drop-shadow-lg'>
      {validateChildren}
    </div>
  )
}
