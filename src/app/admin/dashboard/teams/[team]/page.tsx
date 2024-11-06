import { Icon } from '@iconify/react/dist/iconify.js'

import { getRoles, getTeamMembers, getTeams, getUserById } from '@hex-actions'

import EditUserModal from '@hex-pages/teams/components/EditUserModal'
// import TeamMembersTable from '@hex-pages/teams/components/TeamMembersTable'
import TeamMembersTable from '@hex-pages/teams/components/TeamMembersTable'
import { Button } from '@hex-ui/button'

interface TeamPageProps {
  params: {
    team: string
  }
  searchParams: {
    edit?: string
  }
}

const TeamPage = async ({ params: { team }, searchParams }: TeamPageProps) => {
  const columns = ['Name', 'Role', 'Actions']
  const pathname = `/admin/dashboard/teams/${team}`

  const isModalOpen = !!searchParams.edit

  return (
    <div className='bg-hex-300 bg-opacity-30 rounded-lg h-full'>
      <div className='h-full overflow-y-auto relative'>
        {isModalOpen && (
          <EditUserModal
            isModalOpen={isModalOpen}
            getUser={getUserById}
            getTeams={getTeams}
            getRoles={getRoles}
            backUrl={pathname}
          />
        )}
        <TeamMembersTable
          columns={columns}
          fetchTeamMembers={getTeamMembers}
          team={team}
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
