import classNames from 'classnames'
4
export const TableHeader = ({ columns }: { columns: string[] }) => {
  const columnWidths = ['w-[50%]', 'w-[25%]', 'w-[25%]']
  return (
    <thead className='uppercase text-left sticky top-0 z-10 bg-hex-300'>
      <tr>
        {columns.map((column, index) => (
          <th
            key={column}
            scope='col'
            className={`px-6 py-3 ${columnWidths[index]} ${classNames({ 'rounded-tl-lg': index === 0, 'rounded-tr-lg text-right': index === columns.length - 1 })}`}
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  )
}
