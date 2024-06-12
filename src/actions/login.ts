'use server'

import { z } from 'zod'

import { LoginSchema } from '@utils/validation-schemas'

export const login = (values: z.infer<typeof LoginSchema>) => {
  console.debug('🚀 ~ file: login.ts:8 ~ login ~ values:', values)
}