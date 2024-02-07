import { User } from '@nextui-org/react'
import { cookies } from 'next/headers'

async function getProductsData(authHeader?: string) {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL

  const response = await fetch(`${baseUrl}/api/users/me`, {
    headers: {
      Authorization: `Bearer ${authHeader}`,
      Cookie: `session_id=${authHeader}`,
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
