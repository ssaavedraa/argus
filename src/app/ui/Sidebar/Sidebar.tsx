import { Button, Link } from '@nextui-org/react'
import { Suspense } from 'react'
import UserCard from '../UserCard/UserCard'
import HexIsoLogo from '../icons/HexIsoLogo'

export default function Sidebar() {
  const sideBarItems = [
    {
      name: 'Dashboard',
      path: 'dashboard',
    },
    {
      name: 'Products',
      path: 'products',
    },
    {
      name: 'Services',
      path: 'services',
    },
    {
      name: 'Team',
      path: 'team',
    },
    {
      name: 'Account',
      path: 'account',
    },
  ]

  return (
    <>
      <div>
        <Suspense fallback>
          <UserCard />
        </Suspense>
        <nav className='mt-4'>
          <ul className='flex flex-col gap-2 px-4'>
            {sideBarItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  color='foreground'
                  href={path}
                  className='w-full px-2 py4 h-8 flex items-center rounded-md hover:bg-purple-600 hover:shadow-lg hover:bg-opacity-20'
                >
                  <span className='px-2 py-4'>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className=' h-auto w-3/6 mx-auto text-[#7720D1] opacity-60'>
        <Button className='w-full' color='primary' variant='light'>
          Log out
        </Button>
        <small className='tracking-wide text-md font-light'>Powered by</small>
        <HexIsoLogo />
      </div>
    </>
  )
}
