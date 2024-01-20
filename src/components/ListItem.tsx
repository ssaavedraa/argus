import { FC } from 'react'

const ListItem: FC<any> = ({ name, price, stock }) => {
  return (
    <li className="w-100 h-12 bg-white bg-opacity-20 rounded-md flex flex-row items-center p-3">
      <div className="w-5/12 h-full text-left border-r-[1px] border-[#2524249a]">{name}</div>
      <div className="w-2/12 h-full text-center border-x-[1px] border-[#2524249a]">{price}</div>
      <div className="w-2/12 h-full text-center border-x-[1px] border-[#2524249a]">{stock}</div>
      <div className="w-3/12 h-full text-center border-l-[1px] border-[#2524249a]"></div>
    </li>
  )
}

export default ListItem
