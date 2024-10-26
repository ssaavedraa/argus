interface TypeaheadOptionProps {
  value: string
  isHighlighted?: boolean
}

export const TypeaheadOption = ({
  value,
  isHighlighted = false,
}: TypeaheadOptionProps) => {
  return (
    <li className={`${isHighlighted ? 'bg-red-400' : 'bg-blue-500'}`}>
      {value}
    </li>
  )
}
