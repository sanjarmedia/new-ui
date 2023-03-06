import Link from 'next/link';
import { NextIcon } from '../../icons';
import Image from 'next/image';
import WebApp from '../../../public/image/WebLog.png';
import MobileApp from '../../../public/image/driverAppSize.png';

export default function EldHead(){
  return(
    <>
      <div className='md:w-full'>
        <div className='w-full flex justify-center pt-44'>
          <div className='tracking-tight text-4xl md:text-5xl lg:text-7xl font-bold text-center
           bg-gradient-to-r bg-clip-text text-transparent from-primary via-black dark:via-white to-primary animate-text'
          >
            ELD Dashboard
          </div>
        </div>
        <div className='text-sm text-center pt-5'>
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
        <div className='relative z-10 mt-32 text-center px-5 md:px-16 xl:px-72'>
          <Image src={WebApp} />
          <div className='absolute w-[64.21px] md:w-[200px] xl:w-[150px] 2xl:w-[300px] right-5 lg:right-72 bottom-0'>
            <Image src={MobileApp} className='' />
          </div>
        </div>
      </div>
    </>
  )
}