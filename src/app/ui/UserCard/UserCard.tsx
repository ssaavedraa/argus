import { User } from '@nextui-org/react'
import { cookies } from 'next/headers'

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL

async function getProductsData(authHeader?: string) {
  const response = await fetch(`${apiUrl}/users/me`, {
    headers: {
      Authorization: `Bearer ${authHeader}`,
    },
    credentials: 'include',
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message)
  }

  return response.json()
}
export default async function UserCard() {
  const cookieStore = cookies()
  const session_id = cookieStore.get('session_id')?.value
  const userDetails = await getProductsData(session_id)

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
