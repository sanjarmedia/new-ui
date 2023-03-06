import { MessageIcon, NextIcon, SalesIcon, SupportIcons } from '../icons'
import Link from 'next/link'

export function ContactUs() {
  return (
    <>
      <div className='pt-44 z-20'>
        <div className='pt-32 pl-5 md:pl-12 2xl:px-64 md:w-full tracking-tighter md:tracking-normal'>
          <h1 className='text-primary font-medium'>Contact us</h1>

          <div className='tracking-tight md:mt-3 text-4xl lg:text-5xl bg-gradient-to-r bg-clip-text text-transparent
             from-primary via-black dark:via-white to-primary animate-text font-bold md:h-14'>
            Stay in touch with us
          </div>
        </div>
      </div>

      <div className='md:grid md:grid-cols-3 md:gap-4 px-5 md:px-12 2xl:px-64'>
        <div className='mt-14 lg:mt-44 md:w-full '>
          <SupportIcons />

          <p className='font-bold text-3xl mt-5 md:mt-8'>Support team</p>

          <p className='md:mt-5'>
            Phone: +1 (000) 000-0000 <br />
            Email: support@new.com
          </p>
        </div>

        <div className='mt-14 lg:mt-44 md:w-full'>
          <SalesIcon />

          <p className='font-bold text-3xl mt-5 md:mt-8'>Sales team</p>

          <p className='md:mt-5'>
            Phone: +1 (000) 000-0000 <br />
            Email: sales@new.com
          </p>
        </div>

        <div className='mt-14 pb-36 lg:mt-44 md:w-full'>
          <MessageIcon />

          <p className='font-bold text-3xl mt-5 md:mt-8'>Quick Message</p>

          <p className='md:mt-5'>
            If you have any questions or offers. <br />
            send us your message
          </p>

          <Link href='/contact'>
            <button
              className='mt-5 flex justify-center items-center bg-primary rounded-3xl text-white
            px-3 py-1.5 md:px-5 md:py-2.5 hover:bg-hover group duration-300'
            >
              Send Message
              <NextIcon className='stroke-white ml-2 group-hover:stroke-white' />
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
