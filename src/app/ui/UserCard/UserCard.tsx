import { User } from '@nextui-org/react'
import { getProductsData } from './actions'

export default async function UserCard() {
  const userDetails = await getProductsData()

  return (
    <User
      name={userDetails.name}
      description={userDetails.companyRole}
      avatarProps={{
        showFallback: true,
      }}
      classNames={{
        name: 'capitalize',
      }}
    />
  )
}
