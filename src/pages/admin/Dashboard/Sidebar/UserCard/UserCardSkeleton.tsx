export default function UserCardSkeleton() {
  return (
    <div className='flex items-center justify-start gap-2 rounded-small outline-none h-10'>
      <div className='flex relative justify-center items-center overflow-hidden align-middle h-10 w-10 rounded-full bg-secondary-500 bg-opacity-40 animate-pulse'></div>
      <div className='h-10 w-4/6 inline-flex flex-col items-start gap-1 py-1'>
        <div className='bg-secondary-500 bg-opacity-40 h-1/2 w-full rounded-small animate-pulse'></div>
        <div className='bg-secondary-500 bg-opacity-40 h-1/2 w-full rounded-small animate-pulse'></div>
      </div>
    </div>
  )
}
