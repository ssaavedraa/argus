import { useTranslation } from 'react-i18next'
import { TogglerProps } from '../../types'

const Toggler: React.FC<TogglerProps> = ({
  name,
  handleChange,
  value,
  caption,
}) => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col flex-nowrap justify-center'>
      <label
        htmlFor={name}
        className='my-2 text-lg relative w-full flex items-center'
      >
        <input
          type='checkbox'
          name={name}
          id={name}
          className='sr-only peer'
          onChange={handleChange}
          checked={value as boolean}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 inline-block cursor-pointer" />
        <span className='ml-4'>{t(name.replace(/-/g, ' '))}</span>
      </label>
      <small className='opacity-45 w-full text-sm'>{t(caption || '')}</small>
    </div>
  )
}

export default Toggler
