import { CornerIcon } from '../../icons';
import Image from 'next/image';
import falshIcon from '../../../public/icons/flashIcon.svg';

export default function Feature(){
  return(
   <>
     <div className='relative px-5 md:px-12 2xl:px-64 pt-36 md:w-full md:flex items-start justify-between z-20'>
       <div className='block md:hidden'>
         <div className='flex justify-center items-center bg-green-color h-80'>
           <Image src={falshIcon} />
         </div>
       </div>
       <div className='md:w-1/2 mt-8 md:mt-0'>
         <div className='flex justify-between'>
           <p className='pb-5 text-gradient tracking-tight text-5xl font-bold'>Malfunction indication</p>
           <CornerIcon className='block md:hidden stroke-green-color' />
         </div>
         <p className='md:w-2/3'>
           Immediately contact the support if LED light on the device is off when the device is plugged into the
           diagnostic port or if the malfunction reported by the app.
         </p>
       </div>
       <div className='md:w-1/2 hidden md:flex justify-between items-start'>
         <div className='flex justify-center items-center bg-green-color w-96 h-80'>
           <Image src={falshIcon} />
         </div>
         <div className='bg-green-color h-5 w-5 hidden lg:block' />
       </div>
       <CornerIcon className='absolute bottom-0 hidden rotate-180 md:block stroke-green-color' />
     </div>

     <div className='px-5 md:px-12 2xl:px-64 pt-10 md:pt-36 md:w-full md:flex items-start justify-between z-20'>
       <div className='mt-5 md:mt-0 lg:w-1/2 md:pr-10 xl:pr-44'>
         <div className='flex justify-center items-center bg-primary md:w-96 h-80'>
           <Image src={falshIcon} />
         </div>
       </div>
       <div className='relative lg:w-1/2 mt-8 md:mt-0 md:h-80'>
         <div className='flex justify-between'>
           <p className='text-gradient tracking-tight text-5xl font-bold xl:w-5/12'>Note the malfunction</p>
           <CornerIcon className='stroke-primary' />
         </div>
         <p className='mt-5 md:w-2/3'>
           Note the malfunction and provide a written notice to your fleet within 24 hours.
         </p>
         <div className='hidden md:block absolute right-0 bottom-0 bg-primary w-5 h-5' />
       </div>
     </div>

     <div className='relative px-5 md:px-12 2xl:px-64 pt-10 md:pt-36 md:w-full md:flex items-start justify-between z-20'>
       <div className='mt-5 md:mt-0 bg-yellow-color h-80 flex md:hidden justify-center items-center'>
         <Image src={falshIcon} />
       </div>
       <div className='md:w-1/2 flex items-start justify-between'>
         <div className='hidden md:block h-5 w-5 bg-yellow-color' />
         <div className='lg:w-3/5 flex items-start justify-between mt-10 md:-mt-3'>
           <div>
             <p className='text-gradient tracking-tight text-5xl font-bold h-28'>
               Switch to <br />
               paper logs
             </p>
             <p className='md:mt-2'>
               Keep a paper log for that day and until the device is repaired or replaced. In the event of an
               inspection, display the previous 7 days from the app.
             </p>
           </div>
           <CornerIcon className='block md:hidden stroke-yellow-color' />
         </div>
       </div>
       <div className='bg-yellow-color h-80 w-96 hidden md:flex justify-center items-center'>
         <Image src={falshIcon} />
       </div>
       <CornerIcon className='absolute bottom-0 rotate-180 hidden md:block stroke-yellow-color' />
     </div>

     <div className='relative px-5 md:px-12 2xl:px-64 pt-10 md:pt-36 md:w-full md:flex items-start justify-between z-20'>
       <div className='mt-5 block md:hidden'>
         <div className='flex justify-center items-center bg-red-color h-80'>
           <Image src={falshIcon} />
         </div>
       </div>
       <div className='md:w-1/2 mt-8 md:mt-0'>
         <div className='flex justify-between items-start'>
           <p className='text-gradient tracking-tight text-5xl font-bold h-16'>8 days rule</p>
           <CornerIcon className='block md:hidden stroke-red-color' />
         </div>
         <p className='md:w-2/3'>
           In the event of an ELD malfunction, the motor carrier must take actions to correct the malfunction within 8
           days of discovery.
         </p>
       </div>
       <div className='md:w-1/2 hidden md:flex justify-between items-end'>
         <div className='flex justify-center items-center bg-red-color w-96 h-80'>
           <Image src={falshIcon} />
         </div>
         <div className='bg-red-color h-5 w-5 hidden lg:block' />
       </div>
       <CornerIcon className='absolute bottom-0 hidden md:block rotate-180 stroke-red-color' />
     </div>
   </>
  )
}