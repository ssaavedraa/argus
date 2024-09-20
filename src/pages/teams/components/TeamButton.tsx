'use client'

import { useParams } from 'next/navigation'

import { HexLink } from '@hex-ui/link'

const TeamButton = ({ name = '' }: { name: string }) => {
  const params = useParams()

  return (
    <HexLink
      variant={
        params?.team === name?.toLowerCase().replace(/ /g, '-')
          ? 'button'
          : 'primary'
      }
      href={`/admin/dashboard/teams/${name.toLowerCase().replace(/ /g, '-')}`}
    >
      {name}
    </HexLink>
  )
}

export default TeamButton
