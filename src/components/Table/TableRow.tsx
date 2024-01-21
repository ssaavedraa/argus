import { FC } from 'react'
import { TableRowProps } from '../../types'

const TableRow: FC<TableRowProps> = ({ columns, rowData, isLastRow }) => {
  const getBorder = () =>
    isLastRow ? 'border-none' : 'border-b border-[#ffffff59]'

  const getTextAlign = (index: number) =>
    index !== 0 ? 'text-center' : 'text-left'

  return (
    <tr className={`bg-gray-300 bg-opacity-10 ${getBorder()}`}>
      {columns?.map((column, index) => (
        <td key={index}>
          <div className={`px-6 py-3 w-full ${getTextAlign(index)}`}>
            {rowData[column]}
          </div>
        </td>
      ))}
    </tr>
  )
}

export default TableRow
