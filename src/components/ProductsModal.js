import { Fragment } from 'react'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Next2Icon } from '../icons'

// IMAGE
import EldDashboard from '../../public/image/ELDdashboard.png'
import DriverApp from '../../public/image/driverApp.png'
import EldDevices from '../../public/image/ELDdevice.png'

export function ProductsModal({ open, close }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as='div' className='fixed inset-0 z-40 overflow-y-auto' onClose={close}>
        <div className='min-h-screen px-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='hidden md:flex justify-center'>
              <div className='p-10 mt-16 w-3/4 flex items-center justify-between bg-white rounded-lg drop-shadow-2xl'>
                <Link href='/eld-dashboard'>
                  <div className='w-96 cursor-pointer group'>
                    <div className='flex justify-between items-start'>
                      <p className='text-left text-gradient tracking-tight text-3xl font-bold'>
                        ELD <br /> Dashboard
                      </p>
                      <button
                        className='w-9 h-9 border group-hover:border-primary rounded-full flex justify-center
                        items-center'
                      >
                        <Next2Icon />
                      </button>
                    </div>
                    <p className='text-left my-5 font-medium'>Platform for fleet managers</p>
                    <Image src={EldDashboard} className='rounded-lg' />
                  </div>
                </Link>
                <div className='bg-background-color h-full w-0.5' />
                <Link href='/drivers-app'>
                  <div className='w-96 cursor-pointer group'>
                    <div className='flex justify-between items-start'>
                      <p className='text-left text-gradient tracking-tight text-3xl font-bold'>
                        Drivers’ <br />
                        App
                      </p>
                      <button className='w-9 h-9 border group-hover:border-primary rounded-full flex justify-center items-center'>
                        <Next2Icon />
                      </button>
                    </div>
                    <p className='text-left my-5 font-medium'>Platform for truck drivers</p>
                    <Image src={DriverApp} className='rounded-lg' />
                  </div>
                </Link>
                <div className='bg-background-color h-full w-0.5' />
                <Link href='eld-devices'>
                  <div className='w-96 cursor-pointer group'>
                    <div className='flex justify-between items-start'>
                      <p className='text-left text-gradient tracking-tight text-3xl font-bold'>
                        ELD <br /> Devices
                      </p>
                      <button className='w-9 h-9 border group-hover:border-primary rounded-full flex justify-center items-center'>
                        <Next2Icon />
                      </button>
                    </div>
                    <p className='text-left my-5 font-medium'>ELD Devices</p>
                    <Image src={EldDevices} className='rounded-lg' />
                  </div>
                </Link>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
