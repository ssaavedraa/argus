'use client'

import { AccordionItem, Avatar, Listbox, ListboxItem } from '@nextui-org/react'

export default function SideBar() {
  return (
    <>
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
            showDivider
          >
            Dashboard
          </ListboxItem>
          <ListboxItem
            key='dashboard'
            color='primary'
            variant='flat'
            showDivider
          >
            Products
          </ListboxItem>
          <ListboxItem
            key='dashboard'
            color='primary'
            variant='flat'
            showDivider
          >
            Team
          </ListboxItem>
          <ListboxItem
            key='dashboard'
            color='primary'
            variant='flat'
            showDivider
          >
            Manage your account
          </ListboxItem>
        </Listbox>
        <AccordionItem>Dasboard</AccordionItem>
        {/* <Accordion className='text-white' variant='light'>
          <AccordionItem title='Dashboard'></AccordionItem>
          <AccordionItem title='Products' aria-expanded='true'>
            <Listbox title={'Actions'}>
              <ListboxSection title={'Actions'}>
                <ListboxItem
                  key='add-new'
                  color='primary'
                  classNames={{
                    wrapper: 'dark:hover:bg-primary hover:bg-opacity-10',
                  }}
                >
                  Add new
                </ListboxItem>
                <ListboxItem key='add-new' color='primary'>
                  Update
                </ListboxItem>
                <ListboxItem key='add-new' color='primary'>
                  List
                </ListboxItem>
              </ListboxSection>
              <ListboxSection title={'Danger zone'}>
                <ListboxItem
                  key='add-new'
                  color='danger'
                  className='text-danger'
                >
                  Delete
                </ListboxItem>
              </ListboxSection>
            </Listbox>
          </AccordionItem>
          <AccordionItem title='Collaborators'></AccordionItem>
          <AccordionItem title='Orders'></AccordionItem>
        </Accordion> */}
      </div>
    </>
  )
}
