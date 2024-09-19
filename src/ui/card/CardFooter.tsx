import { FC, PropsWithChildren } from 'react'

interface CardFooterProps {}

export const CardFooter: FC<PropsWithChildren<CardFooterProps>> = ({
  children,
}) => {
  return <div>{children}</div>
}
