import { TableProps } from '../../types'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

const Table: React.FC<TableProps> = ({ columns, tableData }) => {
  return (
    <>
      <table className='w-full mt-4'>
        <thead>
          <TableHeader columns={columns} />
        </thead>
        {!!tableData?.length && (
          <tbody>
            {tableData?.map(({ cellsData, fullData }, rowIndex) => (
              <TableRow
                key={rowIndex}
                rowData={cellsData}
                columns={columns}
                isLastRow={rowIndex === tableData.length - 1}
                fullData={fullData}
              />
            ))}
          </tbody>
        )}
      </table>
      {!tableData?.length && (
        <span className='w-full block py-4 text-center text-xl opacity-80'>
          No data available to be shown
        </span>
      )}
    </>
  )
}

export default Table
