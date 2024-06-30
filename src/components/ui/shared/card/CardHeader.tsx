import { FC, PropsWithChildren } from 'react'

interface CardHeaderProps {}

export const CardHeader: FC<PropsWithChildren<CardHeaderProps>> = ({
  children,
}) => {
  return <div>{children}</div>
}
