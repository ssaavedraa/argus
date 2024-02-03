import { ReactNode } from 'react'
import CheckmarkCircle from './CheckmarkCircle'
import CloseIcon from './CloseIcon'
import CrossCircled from './CrossCircled'
import ErrorIcon from './ErrorIcon'
import EyeHide from './EyeHide'
import EyeShow from './EyeShow'
import HexIntegratedLogo from './HexIntegratedLogo'
import HexIsoLogo from './HexIsoLogo'
import InfoIcon from './InfoIcon'
import PlusIcon from './PlusIcon'
import SuccessIcon from './SuccessIcon'
import { IconName, IconProps } from './types'

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
  const iconMap: Record<IconName, ReactNode> = {
    plus: <PlusIcon />,
    close: <CloseIcon />,
    error: <ErrorIcon />,
    info: <InfoIcon />,
    success: <SuccessIcon />,
    hexIsoLogo: <HexIsoLogo />,
    hexIntegrated: <HexIntegratedLogo />,
    crossCircled: <CrossCircled />,
    checkmarkCircle: <CheckmarkCircle />,
    eyeHide: <EyeHide />,
    eyeShow: <EyeShow />,
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
