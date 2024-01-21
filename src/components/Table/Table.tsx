import { TableProps } from '../../types'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className='w-full mt-4'>
      <thead>
        <TableHeader columns={columns} />
      </thead>
      <tbody>
        {data?.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            rowData={row}
            columns={columns}
            isLastRow={rowIndex === data.length - 1}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Table
