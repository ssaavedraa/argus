import { Children, ReactElement } from 'react'

import { isValidElementOfType } from '@hex-utils/type-narrowing'

import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'

export const Table = ({
  children,
}: {
  children: [ReactElement<typeof TableHeader>, ReactElement<typeof TableBody>]
}) => {
  const headerCount = Children.toArray(children).filter(
    (child) =>
      isValidElementOfType(child, TableHeader) && child.type == TableHeader,
  ).length

  const bodyCount = Children.toArray(children).filter(
    (child) =>
      isValidElementOfType(child, TableBody) && child.type == TableBody,
  ).length

  if (headerCount != 1 || bodyCount != 1) {
    throw new Error(
      'Table must have one TableHeader and one TableBody instance',
    )
  }

  return <table className='w-full rounded-md overflow-clip'>{children}</table>
}
