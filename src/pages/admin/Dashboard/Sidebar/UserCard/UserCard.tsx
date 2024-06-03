import { User } from '@nextui-org/react'

export default async function UserCard() {
  // const userDetails = await getUser()
  const userDetails = {
    fullname: 'Santiago Saavedra',
    companyRole: 'CTO',
  }

  return (
    <User
      name={userDetails.fullname}
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
