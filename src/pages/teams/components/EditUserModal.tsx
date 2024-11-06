'use client'

import { useSearchParams } from 'next/navigation'
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { ModalContent } from 'ui/modal/ModalContent'
import { ModalHeader } from 'ui/modal/ModalHeader'

import { Button } from '@hex-ui/button'
import { Form, FormField, FormInput } from '@hex-ui/form'
import { Modal } from '@hex-ui/modal'
import { Typeahead } from '@hex-ui/typeahead'
import { EditUserModalValidationSchema } from '@hex-utils/validation-schemas'

interface EditUserModalProps {
  isModalOpen: boolean
  backUrl: string
  // eslint-disable-next-line no-unused-vars
  getUser: (userId: string) => Promise<any>
  getTeams: () => Promise<any>
  getRoles: () => Promise<any>
}

interface UserDetails {
  fullname: string
  email: string
  role: {
    name: string
  }
  team: {
    name: string
  }
}

function EditUserModal({
  isModalOpen,
  backUrl,
  getUser,
  getTeams,
  getRoles,
}: EditUserModalProps) {
  const searchParams = useSearchParams()
  const userId = searchParams?.get('edit') || ''

  const [companyRole, setCompanyRole] = useState<string>('')
  const [team, setTeam] = useState<string>('')
  const [initialValues, setInitialValues] = useState<UserDetails>(
    {} as UserDetails,
  )

  const fetchSuggestions = async (value: string) => {
    let response = []

    switch (value) {
      case 'roles':
        response = await getRoles()
        break
      case 'teams':
        response = await getTeams()
        break
      default:
        console.error(`No matching case for value: ${value}`)
    }

    await new Promise((resolve) => setTimeout(resolve, 3000))

    return response.map(({ name }: { name: string }) => name) // Return names directly
  }

  const handleRoleChange = (
    event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLElement>,
  ) => {
    if (event.target instanceof HTMLInputElement) {
      setCompanyRole(event.target.value)
    } else {
      setCompanyRole((event.target as HTMLLIElement).dataset.value || '')
    }
  }

  const handleTeamChange = (
    event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLElement>,
  ) => {
    if (event.target instanceof HTMLInputElement) {
      setTeam(event.target.value)
    } else {
      setTeam((event.target as HTMLLIElement).dataset.value || '')
    }
  }

  const fetchUserDetails = async () => {
    try {
      const response = await getUser(userId)

      setInitialValues(response)
      setCompanyRole(response?.role?.name)
      setTeam(response?.team?.name)
    } catch (error) {
      console.error('[ERROR]: ', error)

      throw error
    }
  }

  useEffect(() => {
    if (userId) {
      fetchUserDetails()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  return (
    <Modal isModalOpen={isModalOpen}>
      <ModalHeader title='Edit user' backUrl={backUrl} />
      <ModalContent>
        <div className='flex flex-col h-full'>
          <div className='h-full'>
            <Form
              initialValues={initialValues}
              validationSchema={EditUserModalValidationSchema}
            >
              <FormField
                label='Full Name'
                name='fullname'
                variant='text-top'
                required
              >
                <FormInput
                  defaultValue={initialValues?.fullname}
                  variant='text-top'
                />
              </FormField>
              <FormField label='email' name='email' required variant='text-top'>
                <FormInput defaultValue={initialValues?.email} />
              </FormField>
              <Typeahead
                query={companyRole}
                name='companyRole'
                onChange={handleRoleChange}
                fetchSuggestions={() => fetchSuggestions('roles')}
                inputPlaceholder='Company Role'
                defaultValue={initialValues?.role?.name}
                required
              />
              <Typeahead
                query={team}
                name='teamName'
                onChange={handleTeamChange}
                fetchSuggestions={() => fetchSuggestions('teams')}
                inputPlaceholder='Team Name'
                defaultValue={initialValues?.team?.name}
                required
              />
            </Form>
            <div className='flex justify-end'>
              <Button
                variant='text'
                className='p-2 rounded-md text-danger hover:text-red-300 hover:bg-pink-700 hover:shadow-neumorphic-dark'
              >
                Reset Password
              </Button>
            </div>
          </div>
          <div className='flex justify-end gap-2 mt-6'>
            <Button variant='text'>Cancel</Button>
            <Button variant='primary'>Save</Button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  )
}

export default EditUserModal
