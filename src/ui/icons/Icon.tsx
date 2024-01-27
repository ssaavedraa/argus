import CloseIcon from './CloseIcon'
import ErrorIcon from './ErrorIcon'
import InfoIcon from './InfoIcon'
import PlusIcon from './PlusIcon'
import SuccessIcon from './SuccessIcon'
import { IconProps } from './types'

const Icon: React.FC<IconProps> = ({ name, size, customClassName = '' }) => {
  const getSize = () => {
    switch (size) {
      case 'small':
        return 'w-4 h-4'
      case 'medium':
        return 'w-6 h-6'
      case 'large':
        return 'w-8 h-8'
      default:
        return 'w-6 h-6'
    }
  }
  const iconMap = {
    plus: <PlusIcon />,
    close: <CloseIcon />,
    error: <ErrorIcon />,
    info: <InfoIcon />,
    success: <SuccessIcon />,
  }

  return (
    <div
      className={`inline-block text-inherit ${getSize()} ${customClassName}`}
    >
      {iconMap[name]}
    </div>
  )
}

export default Icon
