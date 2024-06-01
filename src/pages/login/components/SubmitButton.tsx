import { Button } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

export default function SubmitButton({
  formAction,
  isDisabled,
}: {
  // eslint-disable-next-line no-unused-vars
  formAction: (payload: FormData) => void
  isDisabled: boolean
}) {
  const status = useFormStatus()

  return (
    <Button
      type='submit'
      color='primary'
      className='mt-4 disabled:opacity-40'
      disabled={isDisabled}
      formAction={formAction}
      isLoading={status.pending}
    >
      Log In
    </Button>
  )
}
