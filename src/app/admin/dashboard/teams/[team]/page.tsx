'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import { getTeamMembers } from 'actions/teams/getTeamMembers'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Button } from '@hex-ui/button'

interface TeamMember {
  id: number
  email: string
  name: string
  role: string
  teamName: string
}

const TeamPage = () => {
  const params = useParams()

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

  const fetchTeamMembers = async () => {
    if (params?.team) {
      const teamMembers = await getTeamMembers(params?.team as string)

      setTeamMembers(teamMembers)
    }

    return []
  }

  useEffect(() => {
    fetchTeamMembers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  return (
    <div className='bg-hex-300 bg-opacity-30 rounded-lg h-full'>
      <div className='h-full overflow-y-auto relative'>
        <table className='w-full rounded-md overflow-clip'>
          <thead className='uppercase text-left sticky top-0 z-10 bg-hex-300'>
            <tr>
              <th scope='col' className='px-6 py-3 rounded-tl-lg'>
                Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Role
              </th>
              <th scope='col' className='px-6 py-3 rounded-tr-lg'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {teamMembers?.map(({ id, name, teamName, role, email }) => (
              <tr className='border-b border-hex-300 text-left' key={id}>
                <th scope='row' className='px-6 py-4 whitespace-nowrap'>
                  <div className='flex gap-2'>
                    {/* Avatar */}
                    <div className='h-12 aspect-square rounded-full bg-gray-600 flex justify-center items-center'>
                      <p className='block font-light text-xl'>
                        {name
                          .split(' ')
                          .map((name) => name[0])
                          .join('')
                          .toUpperCase()}
                      </p>
                    </div>
                    <div>
                      <p className='font-bold text-accent'>{name}</p>
                      <p className='font-light text-foreground'>{email}</p>
                    </div>
                  </div>
                </th>
                <td className='px-6 py-4'>
                  <div className='flex flex-col'>
                    <p className='font-bold text-accent'>{teamName}</p>
                    <p className='font-light text-foreground'>{role}</p>
                  </div>
                </td>
                <td className='px-6 py-4 text-right'>Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
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
