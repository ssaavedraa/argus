import { Children, PropsWithChildren } from 'react'

import { isValidElementOfType } from '@hex-utils/type-narrowing'

import { TableCell } from './TableCell'

export const TableRow = ({ children }: PropsWithChildren) => {
  if (!children) {
    throw new Error('At least one TableCell child must be provided')
  }

  const areValidChildren = Children.toArray(children).every(
    (child) =>
      isValidElementOfType(child, TableCell) && child.type === TableCell,
  )

  if (!areValidChildren) {
    throw new Error('Every child must be a TableCell instance')
  }

  return <tr className='border-b border-hex-300 text-left'>{children}</tr>
}
