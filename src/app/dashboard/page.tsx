import { auth, signOut } from '@hex-auth'
import { HexIsoLogo } from '@hex-icons'
import { publicRoutes } from '@hex-routes'

const DashboardPage = async () => {
  const session = await auth()

  // TODO: COMPONENTIZE HEADER
  return (
    <div className='h-screen max-h-screen w-screen flex flex-col'>
      <header className='p-4 pb-0 flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center justify-start gap-6'>
          <i className='w-[120px] block'>
            <HexIsoLogo />
          </i>
          <ul className='flex flex-row gap-2'>
            <li className='rounded-2xl px-4 py-1'>Products</li>
            <li className='rounded-2xl px-4 py-1'>Account</li>
          </ul>
        </div>
        <div>
          <h1>{session?.user?.name?.split(' ').slice(0, 2).join(' ')}</h1>
        </div>
      </header>
      <main className='border border-hex-300 rounded-lg p-4 m-4 h-full'>
        DashboardPage
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <form
          action={async () => {
            'use server'

            await signOut({
              redirectTo: publicRoutes[0],
            })
          }}
        >
          <button>Sign Out</button>
        </form>
      </main>
    </div>
  )
}

export default DashboardPage
