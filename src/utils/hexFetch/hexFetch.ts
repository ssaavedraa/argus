'use server'

import { AuthError } from 'next-auth'
// eslint-disable-next-line import/order
import { redirect } from 'next/navigation'

import { auth } from '@hex-auth'

const apiUrl = process.env.API_DOMAIN

/**
 * Reusable fetch function with error handling for Next.js server actions.
 * @param endpoint The API endpoint to call.
 * @param method HTTP method ('GET', 'POST', 'PUT', etc.)
 * @param data Request body data (optional).
 * @param requiresAuth Boolean indicating if auth is required.
 * @returns Parsed response data or throws an error.
 */

export const hexFetch = async (
  endpoint: string,
  method: string = 'GET',
  data?: Record<string, any>,
  requiresAuth: boolean = false,
) => {
  try {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }

    if (requiresAuth) {
      const session = await auth()

      if (!session?.user.accessToken) {
        throw new AuthError('Authentication required.')
      }
      headers['Authorization'] = `Bearer ${session.user.accessToken}`
    }

    const response = await fetch(`${apiUrl}/${endpoint}`, {
      method,
      headers,
      credentials: 'include',
      ...(data && {
        body: JSON.stringify(data),
      }),
    })

    if (!response.ok) {
      let errorMessage = 'An error occured, please try again later'

      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        const errorResponse = await response.json()

        errorMessage = errorResponse.message || errorMessage
      } else {
        errorMessage = response.statusText || errorMessage
      }

      throw new Error(errorMessage)
    }

    const contentType = response.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      return await response.json()
    }

    return {}
  } catch (error) {
    console.error('[HEX API ERROR]: ', error)

    if (error instanceof AuthError) {
      redirect(`/login?error=${encodeURIComponent('Session expired')}`)
    } else {
      throw new Error(
        (error as any).message ||
          'An unexpected error occurred. Please try again.',
      )
    }
  }
}
