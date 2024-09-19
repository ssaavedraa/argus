'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { Button } from '@hex-ui/button'

const TeamButton = ({ name = '' }: { name: string }) => {
  const params = useParams()

  return (
    <Button
      variant={
        params?.team === name?.toLowerCase().replace(/ /g, '-')
          ? 'primary'
          : 'text'
      }
      customStyles='w-full truncate block px-0 py-0'
    >
      <Link
        href={`/admin/dashboard/teams/${name.toLowerCase().replace(/ /g, '-')}`}
        className='h-full w-full overflow-clip py-2 truncate'
      >
        {name}
      </Link>
    </Button>
  )
}

export default TeamButton
