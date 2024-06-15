import NextAuth, { CredentialsSignin } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { LoginSchema } from '@hex-utils/validation-schemas'

class CustomError extends CredentialsSignin {
  code = 'custom_error'
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const validatedFields = await LoginSchema.safeParseAsync(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data

          const response = await fetch(
            `${process.env.API_DOMAIN}/api/users/login`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email,
                password,
              }),
            },
          )

          if (!response.ok) {
            const errorResponse = await response.json()

            throw new CustomError(
              errorResponse.message || 'Invalid credentials',
            )
          }

          const user = await response.json()

          return user
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  session: {
    strategy: 'jwt',
  },
  // TODO; EXTEND USER TYPE TO INCLUDE ADDITIONAL FIELDS
})
