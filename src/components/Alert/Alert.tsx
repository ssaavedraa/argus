import { AlertProps } from '../../types'
import Icon from '../icons/Icon'

const Alert: React.FC<AlertProps> = ({ message, type, iconName }) => {
  const stylesByType = () => {
    switch (type) {
      case 'error':
        return 'bg-red-300 text-red-800'
      case 'success':
        return 'bg-green-300 text-green-800'
      case 'info':
        return 'bg-transparent text-white'
    }
  }

  const AlertIcon = () => {
    return iconName ? <Icon name={iconName} /> : null
  }

  return (
    <div
      className={`shadow-neumorphic-sm rounded-md text-center my-3 p-3 flex justify-between items-center ${stylesByType()}`}
    >
      <div className='flex items-center'>
        <AlertIcon />
        <span className='ml-2'>{message}</span>
      </div>
      <button className='p-0 flex items-center'>
        <Icon name='close' />
      </button>
    </div>
  )
}

export default Alert
