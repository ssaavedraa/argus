import { TableHeaderProps } from './types'

export default function TableHeader({ columns }: TableHeaderProps) {
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
