'use client'

import { object } from 'zod'

import { login } from '@hex-actions'
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
    <main className='h-screen flex flex-row'>
      <section className='w-1/3 m-auto rounded-xl flex flex-col items-center gap-4 bg-purple-700 bg-opacity-30 p-4 drop-shadow-lg'>
        <h1 className='flex flex-row gap-2 items-center text-4xl text-nowrap'>
          Invite others to join
          <i className='inline-block w-[90px]'>
            <HexIsoLogo />
          </i>
        </h1>
        <hr className='border-hex-300 border-opacity-60 w-full' />
        <Form
          initialValues={initialValues}
          action={login}
          validationSchema={InviteValidationSchema}
        >
          <FormField name='fullName' label='Full Name' required>
            <FormInput type='text' autoComplete='full-name' />
          </FormField>
          <FormField name='companyName' label='Company Name' required>
            <FormInput type='text' autoComplete='company-name' />
          </FormField>
          <FormField name='email' label='Email' required>
            <FormInput type='email' autoComplete='email' />
          </FormField>
          <FormButton>
            <p>Invite</p>
          </FormButton>
        </Form>
      </section>
    </main>
  )
}

export default InvitePage
