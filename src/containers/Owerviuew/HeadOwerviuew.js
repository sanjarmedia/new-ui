import Link from 'next/link'
import Image from 'next/image'
import { NextIcon } from '../../icons'
import WebApp from '../../../public/image/Drivers.png'
import MobileApp from '../../../public/image/appImageMobile.png'

export default function HeadOwerviuew(){
  return(
    <>
      <div className='md:w-full'>
        <div className='w-full flex justify-center pt-44 font-bold tracking-tight'>
          <div
            className='text-center tracking-tight h-24 md:h-32 lg:h-40 text-4xl md:text-5xl lg:text-7xl font-bold h-20
               bg-gradient-to-r bg-clip-text text-transparent from-primary via-black dark:via-white to-primary
               animate-text'
          >
            The best platform for <br/>
            fleet management
          </div>
        </div>

        <div className='text-sm text-center pt-3'>
          A comprehensive suite of tools <br/>
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

        <div className='relative z-10 w-full flex justify-center mt-24 px-5 xl:px-72'>
          <Image src={WebApp}/>
          <div className='absolute -bottom-10 w-[100px] md:w-[200px] xl:w-[230px] 2xl:w-[274px] drop-shadow-2xl'>
            <Image src={MobileApp} data-timing='circIn' className='bg-background-color rounded-lg'/>
          </div>
        </div>
      </div>
    </>
  )
}