import Link from 'next/link'
import { Checked3Icon, NextIcon } from '../../icons'


export default function PricingBusinessPlus(){
  return(
    <div className='border z-10 bg-white rounded-xl md:w-[440px]'>
      <div className='p-10'>
        <h1 className='businessPlus w-1/2 text-3xl md:w-3/5'>Business Plus</h1>
        <p className='mt-2 text-secondary'>Premium pack, good for Start-ups</p>

        <hr className='mt-5 mb-3 dark:border-secondary' />

        <div className='flex py-3'>
          <Checked3Icon />
          <p className='ml-3'>
            EInlcudes everything <br />
            Business plan has
          </p>
        </div>
        <div className='flex py-3'>
          <Checked3Icon /> <p className='ml-3'>Customized features</p>
        </div>
        <div className='flex py-3'>
          <Checked3Icon /> <p className='ml-3'>Customizes assets</p>
        </div>
      </div>
      <Link href='http://app.neweldworld.com'>
        <div className='mt-[162px] cursor-pointer flex justify-center items-center border-t rounded-b-xl py-5
              hover:bg-primary text-center group duration-300'
        >
          <p className='group-hover:text-white'>Contact sales</p>
          <NextIcon className='stroke-black group-hover:stroke-white ml-5' />
        </div>
      </Link>
    </div>
  )
}