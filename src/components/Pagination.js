import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { UnionDownIcon } from '../icons'

export function Pagination({ length }) {
  const [state, setState] = useState(5)

  return (
    <div className='mt-28 px-4 md:px-12 2xl:px-60'>
      <div className='flex py-4 px-5'>
        <div className='flex flex-1 items-center'>
          <Menu
            as='div'
            className='relative rounded-xl bg-background-color hover:bg-gray-100 active:bg-gray-100
            dark:bg-background-dark-color dark:text-white'
          >
            <Menu.Button className='flex cursor-pointer items-center justify-center px-3 py-2 text-sm font-normal'>
              {state}

              <UnionDownIcon className='ml-2 fill-gray-400' />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute -top-24 md:top-10 w-14 px-1 py-2 rounded-lg bg-white text-center shadow-lg dark:bg-background-dark-color'>
                <p className='hover:bg-background-color cursor-pointer rounded-lg' onClick={() => setState(5)}>
                  5
                </p>

                <p className='hover:bg-background-color cursor-pointer rounded-lg' onClick={() => setState(10)}>
                  10
                </p>

                <p className='hover:bg-background-color cursor-pointer rounded-lg' onClick={() => setState(15)}>
                  15
                </p>
              </Menu.Items>
            </Transition>
          </Menu>

          <p className='mt-1.5 ml-7 hidden dark:text-white lg:flex xl:flex 2xl:flex'>Showing 1-5 of {length} results</p>
        </div>

        <div className='flex flex-1 justify-end'>
          <div className='flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white cursor-pointer'>
            1
          </div>
          {/*<div*/}
          {/*  className='flex items-center justify-center px-4 py-2 rounded-lg bg-background-color hover:bg-primary*/}
          {/* hover:text-white cursor-pointer ml-3'*/}
          {/*>*/}
          {/*  2*/}
          {/*</div>*/}
          <div
            className='ml-10 inline-flex cursor-pointer items-center rounded-lg bg-gray-100 p-2
              text-gray-300 hover:text-blue-500 dark:bg-background-dark-color'
          >
            <ChevronLeftIcon className='h-6 w-6' />
          </div>
          <div
            className='ml-2 inline-flex cursor-pointer items-center rounded-lg bg-gray-100 p-2
              text-gray-300 hover:text-blue-500 dark:bg-background-dark-color'
          >
            <ChevronRightIcon className='h-6 w-6' />
          </div>
        </div>
      </div>
    </div>
  )
}
