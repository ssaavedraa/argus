export default function Alert({ message }: { message: string }) {
  return (
    <h2 className='text-danger-500 text-center block p-2 mb-4 border rounded-md border-danger-500 bg-danger-50'>
      {message}
    </h2>
  )
}
