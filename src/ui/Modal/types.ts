import { ReactNode } from 'react'
import { Size } from '../types'

export interface ModalProps {
  title: string
  children: ReactNode
  actions?: ReactNode
  size?: Size
}
