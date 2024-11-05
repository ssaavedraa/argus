import { PropsWithChildren } from 'react'

export const TableCell = ({
  children,
  colSpan,
}: PropsWithChildren & { colSpan?: number }) => {
  return (
    <td
      scope='row'
      className={`px-6 py-4 ${colSpan ? 'text-center' : ''}`}
      colSpan={colSpan}
    >
      {children}
    </td>
  )
}
