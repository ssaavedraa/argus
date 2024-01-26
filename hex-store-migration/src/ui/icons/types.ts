import { Size } from '../types'

export type IconName = 'plus' | 'close' | 'error' | 'info' | 'success'

export interface IconProps {
  name: IconName
  size?: Size
  customClassName?: string
}
