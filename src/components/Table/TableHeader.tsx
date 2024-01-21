import { TableHeaderProps } from '../../types'

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <tr>
      {columns?.map((columnName) => (
        <th
          className='capitalize h-10 bg-gray-900 bg-opacity-70'
          key={columnName}
        >
          {columnName}
        </th>
      ))}
    </tr>
  )
}

export default TableHeader
