'use client'

import { Avatar, Link, Listbox, ListboxItem } from '@nextui-org/react'
import HexIsoLogo from '../Hex/HexIsoLogo'

export default function SideBar() {
  const sideBarItems = [
    {
      name: 'Dashboard',
      path: '/admin/dashboard',
    },
    {
      name: 'Products',
      path: '/admin/products',
    },
    {
      name: 'Team',
      path: '/admin/team',
    },
    {
      name: 'Account',
      path: '/admin/account',
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
        <div className='mt-4'>
          <Listbox variant='solid'>
            <ListboxItem
              key='dashboard'
              color='primary'
              variant='flat'
              classNames={{
                title: 'text-xl',
              }}
              showDivider
            >
              <Link
                href='/admin/dashboard'
                className='text-white text-xl'
                rel='noreferrer'
              >
                Dashboard
              </Link>
            </ListboxItem>
            <ListboxItem
              key='dashboard'
              color='primary'
              variant='flat'
              classNames={{
                title: 'text-xl',
              }}
              showDivider
            >
              <Link
                href='/admin/dashboard'
                className='text-white text-xl'
                rel='noreferrer'
              >
                Products
              </Link>
            </ListboxItem>
            <ListboxItem
              key='dashboard'
              color='primary'
              variant='flat'
              classNames={{
                title: 'text-xl',
              }}
              showDivider
            >
              <Link
                href='/admin/dashboard'
                className='text-white text-xl'
                rel='noreferrer'
              >
                Team
              </Link>
            </ListboxItem>
            <ListboxItem
              key='dashboard'
              color='primary'
              variant='flat'
              classNames={{
                title: 'text-md',
              }}
              showDivider
            >
              <Link
                href='/admin/dashboard'
                className='text-white text-md'
                rel='noreferrer'
              >
                Manage account
              </Link>
            </ListboxItem>
          </Listbox>
        </div>
      </div>
      <div className=' h-auto w-3/6 mx-auto text-[#7720D1] opacity-60'>
        <small className='tracking-wide text-md font-light'>Powered by</small>
        <HexIsoLogo />
      </div>
    </>
  )
}
