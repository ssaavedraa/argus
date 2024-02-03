import { Size } from '../types'

export type IconName =
  | 'plus'
  | 'close'
  | 'error'
  | 'info'
  | 'success'
  | 'hexIsoLogo'
  | 'hexIntegrated'
  | 'crossCircled'
  | 'checkmarkCircle'
  | 'eyeShow'
  | 'eyeHide'

export interface IconProps {
  name: IconName
  size?: Size
  customClassName?: string
}
