import { TableProps } from '../../types'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <>
      <table className='w-full mt-4'>
        <thead>
          <TableHeader columns={columns} />
        </thead>
        {!!data?.length && (
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
        )}
      </table>
      {!data?.length && (
        <span className='w-full block py-4 text-center text-xl opacity-80'>
          No data available to be shown
        </span>
      )}
    </>
  )
}

export default Table
