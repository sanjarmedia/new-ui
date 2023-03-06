import { FacebookIcon, InstagramIcon, NextIcon, YoutubeIcon } from '../icons'
import Link from 'next/link'

export function Footer() {
  return (
    <div className='text-sm relative mt-52 text-center flex justify-center bg-background-color'>
      <div className='absolute bg-background-main bg-no-repeat bg-center bg-auto w-full h-screen' />
      <div className='pt-44 h-screen'>
        <p className='text-primary font-medium mb-3'>Let’s get started</p>

        <p className='tracking-tight font-bold md:h-14 h-12 text-4xl md:text-5xl bg-gradient-to-r
        bg-clip-text text-transparent from-primary via-black dark:via-white to-primary animate-text'
        >
          Ready to get started?
        </p>

        <div className='flex items-center justify-center pt-5 md:pt-10 font-medium'>
          <Link href='http://app.neweldworld.com'>
            <div className='z-20 flex items-center justify-between bg-primary text-white rounded-full px-4 py-2.5
            hover:bg-blue-600 duration-300'
            >
              Get started
              <NextIcon className='stroke-white ml-3' />
            </div>
          </Link>
          <Link href='/contact'>
            <div
              className='mix-blend-multiply cursor-pointer flex items-center justify-between bg-background-color
                text-primary rounded-full px-4 py-2.5 ml-5 hover:bg-primary hover:text-white group duration-300'
            >
              Contact sales
              <NextIcon className='stroke-primary group-hover:stroke-white ml-3 duration-300' />
            </div>
          </Link>
        </div>
        <div className='absolute bottom-10 left-0 right-0 '>
          <p className='text-sm'>© New ELD World 2022. All rights reserved.</p>

          <div className='mt-8 flex justify-center items-center'>
            <FacebookIcon />
            <YoutubeIcon className='ml-5' />
            <InstagramIcon className='ml-5' />
          </div>
        </div>
      </div>
    </div>
  )
}
