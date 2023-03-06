import Image from 'next/image'
import Link from 'next/link'
import { DateTime } from 'luxon'
import { NextIcon } from '../icons'

export function News({ id, image, imageMobile, date, title, description }) {
  return (
    <div className='relative z-10 mt-5 lg:mt-8 px-5 md:px-12 2xl:px-64 md:w-full md:flex items-start justify-between'>
      <div className='pr-5 lg:pr-0 hidden md:block'>
        <Image src={image} />
      </div>

      <div className='block md:hidden'>
        <Image src={imageMobile} />
      </div>

      <div className='mt-10 md:pl-5 md:mt-0 md:w-3/5'>
        <p className='text-primary -mt-1'>{DateTime.fromISO(date).toFormat('MMMM d yyyy')}</p>

        <p className='my-5 md:mt-2 font-bold md:text-xl lg:text-4xl md:tracking-tight lg:tracking-normal'>{title}</p>

        <p className='-mt-4 my-0 lg:my-5 lg:w-7/12 md:tracking-tight lg:tracking-normal'>{description}</p>

        <div className='mt-4 font-medium'>
          <Link href={{ pathname: '/news', query: { id } }}>
            <button className='flex items-center justify-between bg-background-color text-primary rounded-full px-4 py-2.5'>
              Read more
              <NextIcon className='stroke-primary ml-3' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
