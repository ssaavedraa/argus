import { User } from '@nextui-org/react'
import { getUser } from './actions'

export default async function UserCard() {
  const userDetails = await getUser()

  return (
    <User
      name={userDetails.fullname}
      description={userDetails.abn}
      avatarProps={{
        showFallback: true,
      }}
      classNames={{
        name: 'capitalize',
      }}
    />
  )
}
