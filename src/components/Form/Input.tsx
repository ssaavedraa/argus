import { InputProps } from '../../types'

const Input: React.FC<InputProps> = ({
  name,
  handleChange,
  value,
  error,
  type,
}) => {
  return (
    <div className='flex flex-col my-4'>
      <label htmlFor={name} className='my-2 text-lg capitalize'>
        {name.replace(/-/g, ' ')}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className='rounded-md bg-transparent border-none text-lg px-3 py-2 shadow-neumorphic-inset outline-none'
        onChange={handleChange}
        value={value as string}
      />
      <small className='text-red-600 block mt-3 ml-2 text-sm normal-case'>
        {error && error.charAt(0).toUpperCase() + error.slice(1)}
      </small>
    </div>
  )
}

export default Input
