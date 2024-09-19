import { PropsWithChildren } from 'react'

export const TableCell = ({ children }: PropsWithChildren) => {
  return (
    <td scope='row' className='px-6 py-4'>
      {children}
    </td>
  )
}
