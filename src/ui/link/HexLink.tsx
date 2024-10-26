import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

type LinkVariant = 'primary' | 'button'

type LinkSize = 'small' | 'medium' | 'large'

interface HexLinkProps extends LinkProps, PropsWithChildren {
  variant?: LinkVariant
  size?: LinkSize
  icon?: string
  customStyles?: string
}

const baseStyles = 'block py-2 px-4 rounded-md'

const variantStyles: Record<LinkVariant, string> = {
  button: 'bg-hex-300 hover:bg-hex-400 text-primary shadow-neumorphic-light',
  primary: 'bg-transparent text-hex-200 hover:text-primary hover:bg-hex-300',
}

export const HexLink = ({
  href,
  children,
  variant = 'primary',
  customStyles,
}: HexLinkProps) => {
  return (
    <Link
      href={href}
      className={classNames(baseStyles, variantStyles[variant], customStyles)}
    >
      {children}
    </Link>
  )
}
