import { FC } from 'react'
import { ListProps } from '../types'

const List: FC<ListProps> = ({ children }) => {
  return <ul className="h-full flex flex-col gap-y-4 overflow-y-auto">{children}</ul>
}

export default List
