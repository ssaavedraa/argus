import { getTeams } from 'actions/teams/getTeams'
import { PropsWithChildren } from 'react'

import TeamButton from '@hex-pages/teams/components/TeamButton'

interface Team {
  id: number
  name: string
}

const TeamsLayout = async ({ children }: PropsWithChildren) => {
  const teams: Team[] = await getTeams()

  return (
    <div className='flex flex-row flex-nowrap w-full h-full'>
      <aside className='h-full w-1/6 pl-4 pb-4 pr-0 pt-0 overflow-y-auto'>
        <p className='mb-2 text-2xl text-center'>Teams</p>
        <ul className='block'>
          {teams.map(({ name, id }) => (
            <TeamButton key={id} name={name} />
          ))}
        </ul>
      </aside>
      <div className='h-full w-5/6 max-h-full overflow-y-auto px-4'>
        {children}
      </div>
    </div>
  )
}

export default TeamsLayout
