import Image from 'next/image'

import { DoubleQuotesIcon } from '../icons'

import DiyorAbduvokhidov from '../../public/image/DiyorAbduvokhidov.png'
import DiyorRound from '../../public/image/DiyorAbduvokhidovRounded.png'

export default function UserComment(){
  return(
    <>
      <div
        className='relative z-30 md:w-full block md:flex items-start justify-between px-5 md:px-12
        2xl:px-64 mt-44 py-24'
      >
        <div className='md:w-64 lg:w-1/2 md:pl-5 hidden md:block flex justify-start'>
          <Image src={DiyorAbduvokhidov}/>
        </div>
        <div className='md:pl-5 lg:ml-0 md:w-7/12 lg:w-3/5'>
          <p className='text-primary'>Review time</p>
          <h1 className='mt-3 text-gradient tracking-tighter md:leading-xl text-xl md:text-[36px] xl:text-[48px] pr-10'>
            This platform creates a new level of collaboration that never really existed before. The team is able to
            work together and ship products faster.
          </h1>
          <div className='mt-10 md:mt-2 xl:mt-20 flex justify-between items-end'>
            <div className='flex items-center'>
              <div className='w-10 mr-5 block md:hidden'>
                <Image src={DiyorRound} className=''/>
              </div>
              <div>
                <p className='font-bold md:text-xl lg:text-3xl'>Diyor Abduvokhidov</p>
                <p className='pt-2.5'>CEO of GoldenELD</p>
              </div>
            </div>
            <DoubleQuotesIcon/>
          </div>
        </div>
      </div>
    </>
  )
}