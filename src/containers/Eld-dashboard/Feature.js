import Image from 'next/image';
import easyIcon from '../../../public/icons/EasyIcon.svg';
import {CornerIcon, NextIcon} from '../../icons';
import imageIcon from '../../../public/icons/imageIcon.svg';
import companieIcon from '../../../public/icons/companieIcon.svg';
import trackingIcon from '../../../public/icons/tracingIcon.svg';
import filterIcon from '../../../public/icons/filterIcon.svg';
import reportIcon from '../../../public/icons/reportIcon.svg';
import chatIcon from '../../../public/icons/chatIcon.svg';
import MobileDriver from '../../../public/image/driverApp.png';
import Link from 'next/link';
import EldDevices from '../../../public/image/ELDdevice.png';

export default function Feature(){
  return(
    <>
      <div className='relative px-5 md:px-12 2xl:px-64 pt-36 md:w-full md:flex items-start justify-between z-20'>
        <div className='block md:hidden'>
          <div className='flex justify-center items-center bg-green-color h-80'>
            <Image src={easyIcon} />
          </div>
        </div>
        <div className='md:w-1/2 mt-8 md:mt-0'>
          <div className='flex justify-between'>
            <p className='text-gradient tracking-tight text-5xl font-bold h-16 md:w-2/5'>Easy to use</p>
            <CornerIcon className='inline md:hidden stroke-green-color' />
          </div>
          <p className='md:w-2/3'>
            The navigation of this platform was designed very convenient and easy to use and the same patterns is used
            around the platform. That is why you dont need to have good computer skill to use our platform.
          </p>
          <CornerIcon className='absolute bottom-0 hidden md:inline stroke-green-color -rotate-180' />
        </div>
        <div className='md:w-1/2 hidden md:flex justify-between items-start'>
          <div className='flex justify-center items-center bg-green-color w-96 h-80'>
            <Image src={easyIcon} />
          </div>
          <div className='bg-green-color h-5 w-5 hidden lg:block'/>
        </div>
      </div>

      <div className='px-5 md:px-12 2xl:px-64 pt-10 md:pt-36 md:w-full md:flex items-start justify-between z-20'>
        <div className='mt-5 md:mt-0 lg:w-1/2 md:pr-10 xl:pr-44'>
          <div className='flex justify-center items-center bg-primary md:w-96 h-80'>
            <Image src={imageIcon} />
          </div>
        </div>
        <div className='relative lg:w-1/2 mt-8 md:mt-0 md:h-80'>
          <div className='flex justify-between'>
            <p className='text-gradient tracking-tight text-5xl font-bold h-24'>User Interface</p>
            <CornerIcon className='stroke-primary' />
          </div>
          <p className='md:w-2/3'>
            Our beautifully designed User Interface elements help to you work easily without any misunderstandings. And
            every screens were built with the same pattern for easy workflow.
          </p>
          <div className='hidden md:inline absolute right-0 bottom-0 bg-primary w-5 h-5'></div>
        </div>
      </div>

      <div className='relative px-5 md:px-12 2xl:px-64 pt-10 md:pt-36 md:w-full md:flex items-start justify-between z-20'>
        <div className='mt-5 bg-yellow-color h-80 flex md:hidden justify-center items-center'>
          <Image src={companieIcon} />
        </div>
        <div className='md:w-1/2 flex items-start justify-between'>
          <div className='hidden md:inline h-5 w-5 bg-yellow-color' />
          <div className='flex items-start justify-between mt-10 md:-mt-3'>
            <div>
              <p className='text-gradient tracking-tight text-5xl font-bold md:h-24'>Multiple companies</p>
              <p className='mt-5 md:mt-0'>You can manage multiple companies with one account.</p>
            </div>
            <CornerIcon className='inline md:hidden stroke-yellow-color' />
          </div>
        </div>
        <div className='bg-yellow-color h-80 w-96 hidden md:flex justify-center items-center'>
          <Image src={companieIcon} />
        </div>
        <CornerIcon className='absolute bottom-0 hidden md:inline stroke-yellow-color rotate-180' />
      </div>

      <div className='relative px-5 md:px-12 2xl:px-64 pt-10 md:pt-36 md:w-full md:flex items-start justify-between z-20'>
        <div className='mt-5 block md:hidden'>
          <div className='flex justify-center items-center bg-red-color h-80'>
            <Image src={trackingIcon} />
          </div>
        </div>
        <div className='md:w-1/2 mt-8 md:mt-0'>
          <div className='flex justify-between items-start'>
            <p className='text-gradient tracking-tight text-5xl font-bold h-16'>Tracking</p>
            <CornerIcon className='inline md:hidden stroke-red-color' />
          </div>
          <p className='md:w-2/3 xl:w-1/2'>Track your fleet with real-time GPS.</p>
        </div>
        <div className='md:w-1/2 hidden md:flex justify-between items-end'>
          <div className='flex justify-center items-center bg-red-color w-96 h-80'>
            <Image src={trackingIcon} />
          </div>
          <div className='bg-red-color h-5 w-5 hidden lg:block' />
        </div>
        <CornerIcon className='absolute bottom-0 hidden md:inline stroke-red-color rotate-180' />
      </div>

      <div className='px-5 md:px-12 2xl:px-64 pt-10 md:pt-36 md:w-full md:flex items-start justify-between z-20'>
        <div className='mt-5 md:mt-0 lg:w-1/2 md:pr-10 xl:pr-44'>
          <div className='flex justify-center items-center bg-background-dark-color md:w-96 h-80'>
            <Image src={filterIcon} />
          </div>
        </div>
        <div className='relative lg:w-1/2 mt-8 md:mt-0 md:h-80'>
          <div className='flex justify-between'>
            <p className='text-gradient tracking-tight text-5xl font-bold h-16'>Filter</p>
            <CornerIcon className='stroke-black' />
          </div>
          <p className='md:w-2/3'>
            Our beautifully designed User Interface elements help to you work easily without any misunderstandings. And
            every screens were built with the same pattern for easy workflow.
          </p>
          <div className='hidden md:inline absolute right-0 bottom-0 bg-black w-5 h-5' />
        </div>
      </div>

      <div className='px-5 md:px-12 2xl:px-64 pt-10 md:pt-36 md:w-full md:flex items-start justify-between z-20'>
        <div className='mt-5 md:mt-0 bg-yellow-color h-80 flex md:hidden justify-center items-center'>
          <Image src={reportIcon} />
        </div>
        <div className='relative md:w-1/2 flex items-end justify-between'>
          <div className='bg-purple-color hidden md:inline h-5 w-5' />
          <div className='flex items-start justify-between mt-10 md:-mt-3 md:h-80'>
            <CornerIcon className='absolute left-0 hidden md:inline stroke-purple-color -rotate-90' />
            <div>
              <p className='text-gradient tracking-tight text-5xl font-bold md:h-16 w-1/2 md:w-3/5 lg:w-2/5'>Reports</p>
              <p className='mt-5 md:mt-0'>Get any type of reports width custom range of time which you want.</p>
            </div>
            <CornerIcon className='inline md:hidden stroke-purple-color' />
          </div>
        </div>
        <div className='bg-purple-color h-80 w-96 hidden md:flex justify-center items-center'>
          <Image src={reportIcon} />
        </div>
      </div>

      <div className='relative px-5 md:px-12 2xl:px-64 pt-10 md:pt-36 md:w-full md:flex items-start justify-between z-20'>
        <div className='mt-5 md:mt-0 block md:hidden'>
          <div className='flex justify-center items-center bg-blue-color h-80'>
            <Image src={chatIcon} />
          </div>
        </div>
        <div className='md:w-1/2 mt-8 md:mt-0'>
          <div className='flex justify-between'>
            <p className='text-gradient tracking-tight text-5xl font-bold h-16 xl:w-1/6'>Chat</p>
            <CornerIcon className='inline md:hidden stroke-blue-color' />
          </div>
          <p className='md:w-2/3 xl:w-1/2'>Communication between dispatchers and drivers through platform.</p>
        </div>
        <div className='md:w-1/2 hidden md:flex justify-between items-start'>
          <div className='flex justify-center items-center bg-blue-color w-96 h-80'>
            <Image src={chatIcon} />
          </div>
          <div className='bg-blue-color h-5 w-5 hidden lg:block' />
        </div>
        <CornerIcon className='absolute bottom-0 hidden md:inline stroke-blue-color -rotate-180' />
      </div>

      <div className='px-5 md:px-12 2xl:px-64 pt-32 md:mt-52 md:flex items-start justify-between'>
        <div className='md:w-[544px] pr-0 md:pr-5'>
          <Image src={MobileDriver} />
          <p className='text-primary font-medium mt-5'>Products</p>
          <p className='text-3xl font-bold my-5'>Drivers’ App</p>
          <p>
            Dealing with a rejected load? Learn how you can avoid costly losses <br /> caused by freight damage
            liability
          </p>
          <div className='flex items-center pt-5 md:pt-10 font-medium'>
            <Link href='/drivers-app'>
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
    </>
  )
}