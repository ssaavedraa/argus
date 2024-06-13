'use server'

import { signIn } from '@auth'
import { AuthError } from 'next-auth'
import { z } from 'zod'

import { LoginSchema } from '@utils/validation-schemas'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = await LoginSchema.safeParseAsync(values)

  if (!validatedFields.success) {
    return {
      error: 'Invalid credentials'
    }
  }

  const { email, password } = validatedFields.data

  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false
      // redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    console.error('[ERROR]: ', error)
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: 'Invalid credentials'
          }
        default:
          return {
            error: error.message
          }
      }
    }

    throw error
  }
}