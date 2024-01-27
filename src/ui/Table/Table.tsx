import ApiService from '@/services/ApiService'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import { TableProps } from './types'

export default async function Table<T>({ dataSource, columns }: TableProps) {
  const tableData = await new ApiService().getData<T[]>(dataSource)

  return (
    <>
      <table className='w-full mt-4'>
        <thead>
          <TableHeader columns={columns} />
        </thead>
        {!!tableData?.length && (
          <tbody>
            {tableData?.map((rowData, rowIndex) => (
              <TableRow
                key={rowIndex}
                rowData={rowData}
                columns={columns}
                isLastRow={rowIndex === tableData.length - 1}
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
