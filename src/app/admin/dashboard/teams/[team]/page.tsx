'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import { getTeamMembers } from 'actions/teams/getTeamMembers'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Button } from '@hex-ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@hex-ui/table'

interface TeamMember {
  id: number
  email: string
  name: string
  role: string
  teamName: string
}

const TeamPage = () => {
  const params = useParams()

  const columns = ['Name', 'Role', 'Actions']

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
        <Table>
          <TableHeader columns={columns} />
          <TableBody>
            {teamMembers.map(({ name, email, teamName, role }, index) => (
              <TableRow key={index}>
                <TableCell>
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
                </TableCell>
                <TableCell>
                  <div className='flex flex-col'>
                    <p className='font-bold text-accent'>{teamName}</p>
                    <p className='font-light text-foreground'>{role}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className='flex flex-row gap-2 text-2xl justify-end'>
                    <Button
                      variant='icon'
                      className='p-2 rounded-md text-hex-300 hover:text-hex-700 hover:bg-hex-300 hover:shadow-neumorphic'
                    >
                      <Icon icon='mdi:pencil' />
                    </Button>
                    <Button
                      variant='icon'
                      className='p-2 rounded-md text-danger hover:text-red-300 hover:bg-pink-700 hover:shadow-neumorphic'
                    >
                      <Icon icon='mdi:garbage' />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
