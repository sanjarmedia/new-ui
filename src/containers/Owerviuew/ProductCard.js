import Image from'next/image';
import EldDashboard from '../../../public/image/ELDdashboard.png';
import {CornerIcon, NextIcon} from '../../icons';
import Link from 'next/link';
import DriverApp from '../../../public/image/driverApp.png';
import EldDevices from '../../../public/image/ELDdevice.png';

export default function ProductCard(){
  return(
    <>
      <div className='px-5 md:px-12 2xl:px-64 pt-44 md:w-full md:flex items-start justify-between z-20'>
        <div className='w-full md:w-72 lg:w-2/5 md:pl-4'>
          <Image src={EldDashboard}/>
        </div>
        <div className='mt-10 md:mt-0 md:w-1/2'>
          <div className='flex justify-between items-start md:pl-4'>
            <p className='text-primary'>Products</p>
            <CornerIcon className='stroke-primary  '/>
          </div>
          <p className='bg-gradient-to-r bg-clip-text text-transparent tracking-tight my-5 md:mt-3
             from-primary via-black dark:via-white to-primary animate-text font-bold text-5xl md:pl-4'>
            ELD Dashboard
          </p>
          <p className='md:pl-4'>
            This is our first and important product. It includes general view which dispatcher can see all drivers
            status and location at the same time and live feeds. Dispatchers can see and add or edit information
            quickly and easy in drivers&apos; logs and other part details.
          </p>
          <div className='mt-10 flex items-center font-medium md:pl-5'>
            <Link href='/eld-dashboard'>
              <button
                className='flex items-center justify-between bg-primary text-white rounded-full px-5 py-2
                  hover:bg-hover duration-300'
              >
                Learn more
                <NextIcon className='stroke-white ml-3'/>
              </button>
            </Link>
            <Link href='http://app.neweldworld.com'>
              <button
                className='flex items-center justify-between bg-background-color text-primary rounded-full px-5
             py-2 ml-5 hover:bg-primary hover:text-white group duration-300'
              >
                Start your trail
                <NextIcon className='stroke-primary ml-3 group-hover:stroke-white'/>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='px-5 md:px-12 2xl:px-64 md:pt-36 md:w-full md:flex items-start justify-between z-20'>
        <div className='mt-10 md:mt-0 md:w-1/2 md:pl-4'>
          <div className='block md:hidden'>
            <Image src={DriverApp}/>
          </div>
          <div className='mt-10 md:mt-0 flex justify-between items-start'>
            <p className='text-primary'>Products</p>
            <CornerIcon className='stroke-primary'/>
          </div>
          <p className='bg-gradient-to-r bg-clip-text text-transparent tracking-tight from-primary via-black
          dark:via-white to-primary animate-text font-bold my-5 md:mt-3 text-3xl lg:text-5xl md:h-14'
          >
            Drivers’ App
          </p>
          <p className=''>
            Every driver is in the line with dispatcher by using this app. And also he can see the the details by every
            status and can insert data and make changes. Driver&apos;s App calculates the driver&apos;s duty and movements
            automatically.
          </p>
          <div className='mt-10 flex items-center font-medium '>
            <Link href='/drivers-app'>
              <button
                className='flex items-center justify-between bg-primary text-white rounded-full px-5 py-2
                  hover:bg-hover duration-300'
              >
                Learn more
                <NextIcon className='stroke-white ml-3'/>
              </button>
            </Link>
            <Link href='http://app.neweldworld.com'>
              <button
                className='flex items-center justify-between bg-background-color text-primary rounded-full px-5
             py-2 ml-5 hover:bg-primary hover:text-white group duration-300'
              >
                Start your trail
                <NextIcon className='stroke-primary ml-3 group-hover:stroke-white'/>
              </button>
            </Link>
          </div>
        </div>
        <div className='hidden md:flex justify-end w-full md:w-72 lg:w-2/5 md:pl-4'>
          <Image src={DriverApp}/>
        </div>
      </div>
      <div className='px-5 md:px-12 2xl:px-64 pt-10 md:pt-36  md:w-full md:flex items-start justify-between z-20'>
        <div className='w-full md:w-72 lg:w-2/5 md:pl-4'>
          <Image src={EldDevices}/>
        </div>
        <div className='md:pl-4 mt-10 md:mt-0 md:w-1/2'>
          <div className='flex justify-between items-start'>
            <p className='text-primary'>Products</p>
            <CornerIcon className='stroke-primary'/>
          </div>
          <p className='bg-gradient-to-r bg-clip-text text-transparent tracking-tight my-5 md:mt-3
             from-primary via-black dark:via-white to-primary animate-text font-bold text-5xl'>
            ELD Devices
          </p>
          <p className=''>
            ELD device is important part in this platform for working whole system properly. It takes the info from
            vehicle and sends it to driver&apos;s app via bluetooth connection and aldo to our main dispatch board at the same time.
          </p>
          <div className='mt-10 flex items-center font-medium '>
            <Link href='/eld-devices'>
              <button
                className='flex items-center justify-between bg-primary text-white rounded-full px-5 py-2
                  hover:bg-hover duration-300'
              >
                Learn more
                <NextIcon className='stroke-white ml-3'/>
              </button>
            </Link>
            <Link href='http://app.neweldworld.com'>
              <button
                className='flex items-center justify-between bg-background-color text-primary rounded-full px-5
             py-2 ml-5 hover:bg-primary hover:text-white group duration-300'
              >
                Start your trail
                <NextIcon className='stroke-primary ml-3 group-hover:stroke-white'/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}