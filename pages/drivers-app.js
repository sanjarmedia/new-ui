import Image from 'next/image'
import Link from 'next/link'

import { NextIcon } from '../src/icons'
import { Navbar } from '../src/components/Navbar'
import { Footer } from '../src/components/Footer'
import { Animation } from '../src/components/Animation'
import { ScrollToTop } from '../src/components/ScrollToTop'

import EldDashboard from '../public/image/ELDdashboard.png'
import EldDevices from '../public/image/ELDdevice.png'

import BackgroundNavbar from '../src/components/BackgroundNavbar'
import UserComment from '../src/components/UserComment'
import DriverHead from '../src/containers/Driver-app/DriverHead'
import Feature from '../src/containers/Driver-app/Feature'


function DriverApp() {
  return (
    <>
      <Navbar />

      <DriverHead />

      <UserComment />
      
      <Feature />

      <div className='px-5 md:px-12 2xl:px-64 pt-32 md:mt-52 md:flex items-start justify-between'>
        <div className='md:w-[544px] pr-0 md:pr-5'>
          <Image src={EldDashboard} />
          <p className='text-primary font-medium mt-5'>Products</p>
          <p className='text-3xl font-bold my-5'>ELD Dashboard</p>
          <p>
            Dealing with a rejected load? Learn how you can avoid costly losses <br /> caused by freight damage
            liability
          </p>
          <div className='flex items-center pt-5 md:pt-10 font-medium'>
            <Link href='/eld-dashboard'>
              <div
                className='flex items-center justify-between bg-primary text-white rounded-full px-5 py-2
              hover:bg-hover duration-300'
              >
                Get started
                <NextIcon className='stroke-white ml-3' />
              </div>
            </Link>
            <Link href='/contact'>
              <button
                className='flex items-center justify-between bg-background-color text-primary rounded-full px-5 py-2 ml-5
              hover:bg-primary hover:text-white group duration-300'
              >
                Start your trail
                <NextIcon className='stroke-primary ml-3 group-hover:stroke-white' />
              </button>
            </Link>
          </div>
        </div>

        <div className='md:w-[544px] pt-10 md:pt-0 pl-0 md:pl-5'>
          <Image src={EldDevices} />
          <p className='text-primary font-medium mt-5'>Products</p>
          <p className='text-3xl font-bold my-5'>ELD Devices</p>
          <p>
            Dealing with a rejected load? Learn how you can avoid costly losses <br /> caused by freight damage
            liability
          </p>
          <div className='flex items-center pt-5 md:pt-10 font-medium'>
            <Link href='/eld-devices'>
              <div
                className='flex items-center justify-between bg-primary text-white rounded-full px-5 py-2
              hover:bg-hover duration-300'
              >
                Get started
                <NextIcon className='stroke-white ml-3' />
              </div>
            </Link>
            <Link href='/contact'>
              <button
                className='flex items-center justify-between bg-background-color text-primary rounded-full px-5 py-2 ml-5
              hover:bg-primary hover:text-white group duration-300'
              >
                Start your trail
                <NextIcon className='stroke-primary ml-3 group-hover:stroke-white' />
              </button>
            </Link>
          </div>
        </div>
      </div>


      <Animation />

      <Footer />

      <ScrollToTop />

      <BackgroundNavbar />
    </>
  )
}

export default DriverApp
