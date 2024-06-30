import { FC, PropsWithChildren } from 'react'

interface CardContentProps {}

export const CardContent: FC<PropsWithChildren<CardContentProps>> = ({
  children,
}) => {
  return <div>{children}</div>
}
