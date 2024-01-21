import { IconProps } from '../../types'
import PlusIcon from './PlusIcon'

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
  }

  return (
    <div className={`inline-block text-white ${getSize()} ${customClassName}`}>
      {iconMap[name]}
    </div>
  )
}

export default Icon
