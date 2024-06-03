import { User } from '@nextui-org/react'

export default async function UserCard() {
  // const userDetails = await getUser()
  const user = {
    fullname: 'Santiago Saavedra',
    companyRole: 'CTO',
  }

  return (
    <User
      name={user.fullname}
      description={user.companyRole}
      avatarProps={{
        showFallback: true,
      }}
      classNames={{
        name: 'capitalize',
      }}
    />
  )
}
