'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import { getTeamMembers } from 'actions/teams/getTeamMembers'
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { ModalContent } from 'ui/modal/ModalContent'
import { ModalHeader } from 'ui/modal/ModalHeader'

import TeamMembersTable from '@hex-pages/teams/components/TeamMembersTable'
import { Button } from '@hex-ui/button'
import { Form, FormField, FormInput } from '@hex-ui/form'
import { Modal } from '@hex-ui/modal'
import {
  Typeahead,
  TypeaheadInput,
  TypeaheadOption,
  TypeaheadSuggestions,
} from '@hex-ui/typeahead'

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

  const [companyRole, setCompanyRole] = useState<string>('')

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

  const typeAheadOptions = ['CTO', 'CEO', 'Sales manager']

  const handleRoleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCompanyRole(event.target.value)
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
            <FormField label='Role' name='role' required></FormField>
          </Form>
          <Typeahead value={companyRole}>
            <TypeaheadInput value={companyRole} onChange={handleRoleChange} />
            {typeAheadOptions.length > 0 ? (
              <TypeaheadSuggestions>
                {typeAheadOptions.map((suggestion, index) => (
                  <TypeaheadOption key={index} value={suggestion} />
                ))}
              </TypeaheadSuggestions>
            ) : null}
          </Typeahead>
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
