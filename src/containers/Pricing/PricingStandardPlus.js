import Link from 'next/link'
import { Checked3Icon, NextIcon } from '../../icons'


export default function PricingStandardPlus(){
  return(
    <div className='border z-10 bg-white rounded-xl md:w-[440px]'>
      <div className='p-10'>
        <h1 className='standardPlus w-1/2 text-3xl font-black md:w-3/5'>Standard Plus</h1>
        <p className='mt-2 text-secondary'>Premium pack, good for Start-ups</p>
        <p className='mt-5 text-3xl font-black'>
          $70.00
          <span className='ml-2 text-lg font-normal text-secondary'>per month/unit</span>
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
        <div className='mb-2.5 flex py-3'>
          <Checked3Icon /> <p className='ml-3'>IFTA Reporting</p>
        </div>
      </div>
      <Link href='http://app.neweldworld.com'>
        <div
          className='cursor-pointer flex justify-center items-center rounded-b-xl bg-primary py-5
              text-center hover:bg-hover hover:text-white group duration-300'
        >
          <p className='text-white'>Get started</p>
          <NextIcon className='stroke-white ml-5 duration-300' />
        </div>
      </Link>
    </div>
  )
}