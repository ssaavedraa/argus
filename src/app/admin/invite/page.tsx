'use client'

import { Card, CardContent, CardHeader } from 'components/ui/shared/card'
import { Suspense } from 'react'
import { object } from 'zod'

import { invite } from '@hex-actions'
import { HexIsoLogo } from '@hex-icons'

import {
  Form,
  FormButton,
  FormField,
  FormInput,
} from '@hex-shared-components/form'

const InvitePage = () => {
  interface InviteData {
    email: string
    name: string
    companyName: string
  }

  const initialValues: InviteData = {
    email: '',
    name: '',
    companyName: '',
  }

  const InviteValidationSchema = object({})

  return (
    <Suspense>
      <main className='h-screen flex flex-row items-center lg:max-w-[1280px] mx-auto'>
        <Card>
          <CardHeader>
            <h1 className='flex flex-row gap-2 items-center text-3xl text-nowrap'>
              Invite others to join
              <i className='inline-block w-[90px]'>
                <HexIsoLogo />
              </i>
            </h1>
          </CardHeader>
          <CardContent>
            <Form
              initialValues={initialValues}
              action={invite}
              validationSchema={InviteValidationSchema}
            >
              <FormField name='fullname' label='Full Name' required>
                <FormInput type='text' autoComplete='full-name' />
              </FormField>
              <FormField name='company-name' label='Company Name' required>
                <FormInput type='text' autoComplete='company-name' />
              </FormField>
              <FormField name='email' label='Email' required>
                <FormInput type='email' autoComplete='email' />
              </FormField>
              <FormButton>
                <p>Invite</p>
              </FormButton>
            </Form>
          </CardContent>
        </Card>
      </main>
    </Suspense>
  )
}

export default InvitePage
