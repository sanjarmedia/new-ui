import Link from 'next/link'
import { Checked3Icon, NextIcon } from '../../icons'


export default function PricingBusiness(){
  return(
    <div className='border z-10 bg-white rounded-xl md:w-[440px]'>
      <div className='px-10 pt-10'>
        <h1 className='business w-1/2 text-3xl font-black md:w-2/5'>Business</h1>
        <p className='mt-2 text-secondary'>
          Legendary pack, good for Enterprises. <br />
          Contact sales to subscribe.
        </p>

        <hr className='mt-5 mb-3 dark:border-secondary' />

        <div className='flex py-3'>
          <Checked3Icon /> <p className='ml-3'>Electric Logbook</p>
        </div>
        <div className='flex py-3'>
          <Checked3Icon /> <p className='ml-3'>Electronic DVIR</p>
        </div>
        <div className='flex py-3'>
          <Checked3Icon /> <p className='ml-3'>Fleet Management</p>
        </div>
        <div className='flex py-3'>
          <Checked3Icon /> <p className='ml-3'>GPS Fleet Tracking</p>
        </div>
        <div className='flex py-3'>
          <Checked3Icon /> <p className='ml-3'>IFTA Reporting</p>
        </div>
        <div className='flex py-3'>
          <Checked3Icon /> <p className='ml-3'>Logbook Monitoring</p>
        </div>
        <div className='mb-2.5 flex py-3 '>
          <Checked3Icon /> <p className='ml-3'>24/7 Support</p>
        </div>
      </div>
      <Link href='http://app.neweldworld.com'>
        <div className='cursor-pointer flex justify-center items-center border-t rounded-b-xl py-5 text-center
              hover:bg-primary group duration-300'
        >
          <p className='group-hover:text-white'>Contact sales</p>
          <NextIcon className='stroke-black group-hover:stroke-white ml-5' />
        </div>
      </Link>
    </div>
  )
}