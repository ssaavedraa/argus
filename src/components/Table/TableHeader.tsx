import { useTranslation } from 'react-i18next'
import { TableHeaderProps } from '../../types'

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  const { t } = useTranslation()
  return (
    <tr>
      {columns?.map((columnName) => (
        <th
          className='capitalize h-10 bg-gray-900 bg-opacity-70'
          key={columnName}
        >
          {t(columnName)}
        </th>
      ))}
    </tr>
  )
}

export default TableHeader
