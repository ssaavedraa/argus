'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import { getTeamMembers } from 'actions/teams/getTeamMembers'
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { ModalContent } from 'ui/modal/ModalContent'
import { ModalHeader } from 'ui/modal/ModalHeader'

import TeamMembersTable from '@hex-pages/teams/components/TeamMembersTable'
import { Button } from '@hex-ui/button'
import { Form, FormField, FormInput } from '@hex-ui/form'
import { Modal } from '@hex-ui/modal'
import { Typeahead } from '@hex-ui/typeahead'

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

  const mockFetchSuggestions = async (query: string) => {
    console.debug(
      '🚀 ~ file: page.tsx:68 ~ mockFetchSuggestions ~ query:',
      query,
    )
    // Simulating a delay to mimic an API call
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Return predefined suggestions based on the query
    return ['CTO', 'CEO', 'Sales Manager']
  }

  const [companyRole, setCompanyRole] = useState<string>('')

  const handleRoleChange = (
    event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLElement>,
  ) => {
    if (event.target instanceof HTMLInputElement) {
      setCompanyRole(event.target.value)
    } else {
      mockFetchSuggestions
      setCompanyRole((event.target as HTMLLIElement).dataset.value || '')
    }
  }

  return (
    <div className='bg-hex-300 bg-opacity-30 rounded-lg h-full'>
      <Modal isModalOpen={isModalOpen}>
        <ModalHeader onClose={closeEditModal} title='Edit user' />
        <ModalContent>
          <Form>
            <FormField label='Full Name' name='fullname' required>
              <FormInput />
            </FormField>
            <FormField label='email' name='email' required>
              <FormInput />
            </FormField>
            <FormField label='Address' name='address' required>
              <FormInput />
            </FormField>
            <FormField label='Company Role' name='companyRole' required>
              <FormInput />
            </FormField>
          </Form>
          <Typeahead
            query={companyRole}
            onChange={handleRoleChange}
            fetchSuggestions={mockFetchSuggestions}
          />
          <Button variant='text' color='danger'>
            Reset Password
          </Button>
        </ModalContent>
      </Modal>
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
