export interface TableProps {
  dataSource: string
  columns: string[]
}

export interface TableData<T> {
  tableData: T[]
}

export interface TableHeaderProps {
  columns: string[]
}

export interface TableRowProps<T> extends TableHeaderProps {
  rowData: T
  isLastRow: boolean
}
