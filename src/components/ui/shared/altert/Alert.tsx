interface AlertProps {
  message: string
  variant?: 'info' | 'warning' | 'error' | 'success'
}

export const Alert = (props: AlertProps) => {
  const { message, variant = 'info' } = props

  const baseClasses = 'w-full block rounded-md my-1'
  const variantClasses = {
    info: 'bg-hex-300 text-hex-900',
    warning: 'bg-yellow-300 text-yellow-900',
    error: 'bg-red-300 text-red-900',
    success: 'bg-green-300 text-green-900',
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <span className='p-1 block'>{message}</span>
    </div>
  )
}
