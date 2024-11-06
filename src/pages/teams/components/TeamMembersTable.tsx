'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Button } from '@hex-ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@hex-ui/table'

export interface TeamMember {
  id: number
  email: string
  name: string
  role: string
  teamName: string
}

interface TeamMembersTable {
  columns: string[]
  team: string
  // eslint-disable-next-line no-unused-vars
  fetchTeamMembers: (team: string) => Promise<any>
}

const TeamMembersTable = ({
  columns = [],
  team,
  fetchTeamMembers,
}: TeamMembersTable) => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

  const router = useRouter()

  const editAction = (userId: number) => {
    router.push(`?edit=${userId}`)
  }

  useEffect(() => {
    const fetchData = async () => {
      const members = await fetchTeamMembers(team)
      setTeamMembers(members)
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [team])

  return (
    <Table>
      <TableHeader columns={columns} />
      {
        <TableBody>
          {teamMembers && teamMembers?.length > 0 ? (
            teamMembers?.map(({ name, email, teamName, role, id }) => (
              <TableRow key={id}>
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
                      <p className='font-bold text-accent capitalize'>{name}</p>
                      <p className='font-light text-foreground'>{email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className='flex flex-col'>
                    <p className='font-bold text-accent capitalize'>
                      {teamName}
                    </p>
                    <p className='font-light text-foreground capitalize'>
                      {role}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className='flex flex-row gap-2 text-2xl justify-end'>
                    <Button
                      variant='icon'
                      className='p-2 rounded-md text-hex-300 hover:text-hex-700 hover:bg-hex-300 hover:shadow-neumorphic-light'
                      onClick={() => editAction(id)}
                    >
                      <Icon icon='mdi:pencil' />
                    </Button>
                    <Button
                      variant='icon'
                      className='p-2 rounded-md text-danger hover:text-red-300 hover:bg-pink-700 hover:shadow-neumorphic-light'
                    >
                      <Icon icon='mdi:garbage' />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns?.length}>
                No team members available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      }
    </Table>
  )
}

export default TeamMembersTable
