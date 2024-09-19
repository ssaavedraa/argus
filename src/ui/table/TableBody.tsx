import { Children, ReactElement } from 'react'

import { isValidElementOfType } from '@hex-utils/type-narrowing'

import { TableRow } from './TableRow'

export const TableBody = ({
  children,
}: {
  children: ReactElement[] | ReactElement
}) => {
  if (!children) {
    throw new Error('At least one TableRow child must be provided')
  }

  const areValidChildren = Children.toArray(children).every(
    (child) => isValidElementOfType(child, TableRow) && child.type === TableRow,
  )

  if (!areValidChildren) {
    throw new Error('Every children must be a TableRow instance')
  }

  return <tbody>{children}</tbody>
}
