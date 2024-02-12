import { Button } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

export default function SubmitButton({
  formAction,
}: {
  // eslint-disable-next-line no-unused-vars
  formAction: (payload: FormData) => void
}) {
  const { pending } = useFormStatus()
  return (
    <Button
      type='submit'
      variant='solid'
      color='primary'
      className='mt-4 shadow-neumorphic-sm disabled:opacity-50'
      formAction={formAction}
      isLoading={pending}
    >
      Sign up
    </Button>
  )
}
