'use client'

import { Avatar, Divider, Link } from '@nextui-org/react'
import React from 'react'
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
            {sideBarItems.map(({ name, path }, index) => (
              <React.Fragment key={name}>
                <Divider className='bg-[#7720D1] bg-opacity-60' />
                <li className='w-full px-2 py-4'>
                  <Link color='foreground' href={path}>
                    {name}
                  </Link>
                </li>
                {index === sideBarItems.length - 1 ? (
                  <Divider className='bg-[#7720D1]' />
                ) : null}
              </React.Fragment>
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
