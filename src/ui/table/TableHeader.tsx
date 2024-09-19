import classNames from 'classnames'

export const TableHeader = ({ columns }: { columns: string[] }) => {
  return (
    <thead className='uppercase text-left sticky top-0 z-10 bg-hex-300'>
      <tr>
        {columns.map((column, index) => (
          <th
            key={column}
            scope='col'
            className={`px-6 py-3 ${classNames({ 'rounded-tl-lg': index === 0, 'rounded-tr-lg': index === columns.length - 1 })}`}
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  )
}
