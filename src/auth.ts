import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

import { LoginSchema } from '@utils/validation-schemas'


export const { handlers: {
  GET, POST
}, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const validatedFields = await LoginSchema.safeParseAsync(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data

          const response = await fetch(`${process.env.API_DOMAIN}/api/users/login`, {
            method: 'POST',
            body: JSON.stringify({
              email,
              password
            })
          })

          if (!response.ok) {
            const errorResponse = await response.json()
            console.debug('🚀 ~ file: auth.ts:27 ~ authorize: ~ errorResponse:', errorResponse)

            throw new Error(errorResponse.message || 'Invalid credentials')
          }

          const user = await response.json()
          console.debug('🚀 ~ file: auth.ts:32 ~ authorize: ~ user:', user)

          return user
        }

        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  }
})