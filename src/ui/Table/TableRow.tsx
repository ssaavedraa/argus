'use client'
import { ReactNode } from 'react'
import { TableRowProps } from './types'

export default function TableRow<T>({
  columns,
  rowData,
  isLastRow,
}: TableRowProps<T>) {
  const getBorder = () =>
    isLastRow ? 'border-none' : 'border-b border-[#ffffff59]'

  const getTextAlign = (index: number) =>
    index !== 0 ? 'text-center' : 'text-left'

  return (
    <tr className={`bg-gray-300 bg-opacity-10 w-full relative ${getBorder()}`}>
      {columns?.map((columnName, index) => (
        <td key={index}>
          <div className={`px-6 py-3 w-full ${getTextAlign(index)}`}>
            {rowData[columnName as keyof T] as ReactNode}
          </div>
        </td>
      ))}
    </tr>
  )
}
