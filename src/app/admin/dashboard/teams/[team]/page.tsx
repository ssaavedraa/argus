'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import { getTeamMembers } from 'actions/teams/getTeamMembers'
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import { useEffect, useState } from 'react'

import { getRoles, getTeams, getUserById } from '@hex-actions'

import EditUserModal from '@hex-pages/teams/components/EditUserModal'
import TeamMembersTable from '@hex-pages/teams/components/TeamMembersTable'
import { Button } from '@hex-ui/button'

export interface TeamMember {
  id: number
  email: string
  name: string
  role: string
  teamName: string
}

const TeamPage = () => {
  const params = useParams()
  const query = useSearchParams()
  const backUrl = usePathname()
  const router = useRouter()

  const columns = ['Name', 'Role', 'Actions']

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(!!query?.get('edit'))

  const fetchTeamMembers = async () => {
    if (params?.team) {
      const teamMembers = await getTeamMembers(params?.team as string)

      setTeamMembers(teamMembers)
    }

    return []
  }

  const openEditModal = (userId: number) => {
    router.push(`?edit=${userId}`)
  }

  const closeEditModal = () => {
    router.push(backUrl || '/')
  }

  useEffect(() => {
    fetchTeamMembers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  useEffect(() => {
    setIsModalOpen(!!query?.get('edit'))
  }, [query])

  return (
    <div className='bg-hex-300 bg-opacity-30 rounded-lg h-full'>
      {isModalOpen && (
        <EditUserModal
          isModalOpen={isModalOpen}
          closeEditModal={closeEditModal}
          getUser={getUserById}
          getTeams={getTeams}
          getRoles={getRoles}
        />
      )}
      <div className='h-full overflow-y-auto relative'>
        <TeamMembersTable
          columns={columns}
          editAction={openEditModal}
          teamMembers={teamMembers}
        />
        <div className='absolute p-4 m-4 bottom-0 right-0 aspect-square rounded-full flex items-center justify-center overflow-clip'>
          <Button
            variant='icon'
            className='bg-hex-300 text-primary p-2 rounded-full'
          >
            <Icon icon='akar-icons:plus' fontSize={32} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TeamPage
