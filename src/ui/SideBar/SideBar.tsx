'use client'

import { Avatar, Divider, Link } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import HexIsoLogo from '../Hex/HexIsoLogo'

export default function SideBar() {
  const sideBarItems = [
    {
      name: 'Dashboard',
      view: 'dashboard',
    },
    {
      name: 'Products',
      view: 'products',
    },
    {
      name: 'Team',
      view: 'team',
    },
    {
      name: 'Account',
      view: 'account',
    },
  ]

  const router = useRouter()

  const navigate = (query: string) => {
    router.push(`/admin?view=${query}`)
  }

  return (
    <>
      <div>
        <div className='px-2'>
          <Avatar
            isBordered
            color='primary'
            className='mx-auto'
            size='lg'
            src='https://minecraftfaces.com/wp-content/bigfaces/big-steve-face.png'
          />
          <span className='text-center bold text-2xl mt-4 block'>
            Steve Minecraft
          </span>
          <span className='opacity-60 text-center text-md block'>
            Store manager
          </span>
        </div>
        <nav className='mt-4'>
          <ul>
            {sideBarItems.map(({ name, view }, index) => (
              <>
                <Divider className='bg-[#7720D1]' />
                <li className='w-full p-2'>
                  <Link color='foreground' onClick={() => navigate(view)}>
                    {name}
                  </Link>
                </li>
                {index === sideBarItems.length - 1 ? (
                  <Divider className='bg-[#7720D1]' />
                ) : null}
              </>
            ))}
          </ul>
        </nav>
      </div>
      <div className=' h-auto w-3/6 mx-auto text-[#7720D1] opacity-60'>
        <small className='tracking-wide text-md font-light'>Powered by</small>
        <HexIsoLogo />
      </div>
    </>
  )
}
