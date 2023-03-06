import Link from 'next/link';
import {NextIcon} from '../../icons';
import Image from 'next/image';
import ELDdevice from '../../../public/image/eld-Device.png';

export default function DeviseHead(){
  return(
    <>
      <div className='md:w-full font-inter'>
        <div className='w-full flex justify-center pt-44'>
          <div className='tracking-tight text-4xl md:text-5xl lg:text-7xl font-bold text-center h-14 md:h-24 font-inter
           bg-gradient-to-r bg-clip-text text-transparent from-primary via-black dark:via-white to-primary animate-text'
          >
            ELD Devices
          </div>
        </div>
        <div className='text-md text-center'>
          A comprehensive suite of tools <br />
          to manage your fleet.
        </div>
        <div className='relative z-10 flex items-center justify-center pt-5 md:pt-10 font-medium'>
          <Link href='http://app.neweldworld.com'>
            <div
              className='flex items-center justify-between bg-primary text-white rounded-full px-5 py-2
                hover:bg-hover'
            >
              Get started
              <NextIcon className='stroke-white ml-3'/>
            </div>
          </Link>
          <Link href='/contact'>
            <div
              className='cursor-pointer flex items-center justify-between bg-background-color text-primary rounded-full px-5
             py-2 ml-5 duration-300 hover:bg-primary hover:text-white group'
            >
              Contact sales
              <NextIcon
                className='stroke-primary duration-300 group-hover:stroke-white ml-3 '
              />
            </div>
          </Link>
        </div>
        <div className='relative z-10 mt-32 text-center px-5 lg:px-0'>
          <Image src={ELDdevice} />
        </div>
      </div>
    </>
  )
}