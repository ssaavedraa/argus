import { User } from '@nextui-org/react'

export default async function UserCard() {
  // const userDetails = await getData<UserDetails>('users/me')
  return (
    <User
      name={'userDetails.name'}
      description={'userDetails.companyRole'}
      avatarProps={{
        showFallback: true,
      }}
    />
  )
}
