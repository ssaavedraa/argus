'use server'

import { AuthError } from 'next-auth'
// eslint-disable-next-line import/order
import { redirect } from 'next/navigation'

import { signIn } from '@hex-auth'
import { DEFAULT_LOGIN_REDIRECT } from '@hex-routes'

import { LoginValidationSchema } from '@hex-utils/validation-schemas'


export const login = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const userCredentials = {
    email: formData.get('email'),
    password: formData.get('password')
  }

  const validatedFields = await LoginValidationSchema.safeParseAsync(userCredentials)

  if (!validatedFields.success) {
    return {
      error: 'Invalid credentials'
    }
  }

  const { email, password } = validatedFields.data
  let loginError: string | null = null

  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false
    })
  } catch (error) {
    console.error('[ERROR]: ', error)
    if (error instanceof AuthError) {
      loginError = error.cause?.err?.message || 'Something went wrong. Please try again later'
    }

    throw error
  } finally {
    if (!loginError) {
      redirect(DEFAULT_LOGIN_REDIRECT)
    } else {
      redirect(`/auth/login?error=${loginError}`)
    }
  }
}