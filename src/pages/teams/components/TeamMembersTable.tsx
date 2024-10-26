import { Icon } from '@iconify/react/dist/iconify.js'
import { TeamMember } from 'app/admin/dashboard/teams/[team]/page'

import { Button } from '@hex-ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@hex-ui/table'

interface TeamMembersTable {
  columns: string[]
  teamMembers: TeamMember[]
  // eslint-disable-next-line no-unused-vars
  editAction: (memberId: number) => void
}

const TeamMembersTable = ({
  columns,
  teamMembers,
  editAction,
}: TeamMembersTable) => {
  return (
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
                  className='p-2 rounded-md text-hex-300 hover:text-hex-700 hover:bg-hex-300 hover:shadow-neumorphic-light'
                  onClick={() => editAction(index)}
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
        ))}
      </TableBody>
    </Table>
  )
}

export default TeamMembersTable
