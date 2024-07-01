import { Icon } from '@iconify/react'
import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'outline'
  | 'text'
  | 'icon'
type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: string
}

const baseStyles =
  'inline-flex items-center justify-center focus:outline-none transition-all duration-300'

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-hex-300 hover:bg-hex-400 text-primary shadow-neumorphic',
  secondary:
    'bg-purple-700 hover:bg-purple-800  text-hex-200 shadow-neumorphic',
  danger: 'bg-red-500 hover:bg-red-600 text-pink-200 shadow-neumorphic',
  success: 'bg-green-400 hover:bg-green-500 text-green-700 shadow-neumorphic',
  outline:
    'bg-transparent border-2 border-hex-200 hover:bg-hex-100 hover:text-hex-600 hover:border-hex-600 text-hex-200 hover:shadow-neumorphic',
  text: 'bg-transparent text-hex-200 hover:text-hex-600 hover:bg-hex-100',
  icon: 'text-hex-200 hover:text-hex-800 hover:bg-hex-100 aspect-square',
}

const sizeStyles: Record<ButtonSize, string> = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2',
  large: 'px-6 py-3 text-lg',
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant = 'primary',
  children,
  icon,
  size = 'medium',
}) => {
  const roundedStyles = variant === 'icon' ? 'rounded-full' : 'rounded-lg'

  return (
    <button
      className={classNames(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        roundedStyles,
      )}
    >
      {icon && <Icon className='mr-2' icon={icon} />}
      {children}
    </button>
  )
}
