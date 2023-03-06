import Image from 'next/image';
import easyIcon from '../../../public/icons/EasyIcon.svg';
import { CornerIcon } from '../../icons';
import imageIcon from '../../../public/icons/imageIcon.svg';
import screenIcon from '../../../public/icons/scrinIcon.svg';
import driversIcon from '../../../public/icons/dvirsIcon.svg';
import modeIcon from '../../../public/icons/modeIcon.svg';
import drivingIcon from '../../../public/icons/drivingIcon.svg';
import chatIcon from '../../../public/icons/chatIcon.svg';

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
            <p className='text-gradient tracking-tight text-5xl font-bold md:h-14'>Easy to use</p>
            <CornerIcon className='inline md:hidden stroke-green-color' />
          </div>
          <p className='mt-5 md:w-2/3'>
            The navigation of this platform was designed very convenient and easy to use and the same patterns is used
            around the platform. That is why you dont need to have good computer skill to use our platform.
          </p>
        </div>
        <div className='md:w-1/2 hidden md:flex justify-between items-start'>
          <div className='flex justify-center items-center bg-green-color w-96 h-80'>
            <Image src={easyIcon} />
          </div>
          <div className='bg-green-color h-5 w-5 hidden lg:block'></div>
        </div>
        <CornerIcon className='absolute bottom-0 -rotate-180 hidden md:inline stroke-green-color' />
      </div>

      <div className='px-5 md:px-12 2xl:px-64 pt-10 md:pt-36 md:w-full md:flex items-start justify-between z-20'>
        <div className='mt-10 md:mt-0 lg:w-1/2 md:pr-10 xl:pr-44'>
          <div className='flex justify-center items-center bg-primary md:w-96 h-80'>
            <Image src={imageIcon} />
          </div>
        </div>
        <div className='relative lg:w-1/2 mt-8 md:mt-0 md:h-80'>
          <div className='flex justify-between'>
            <p className='text-gradient tracking-tight text-5xl font-bold'>User Interface</p>
            <CornerIcon className='stroke-primary' />
          </div>
          <p className='mt-5 lg:w-2/3'>
            Our beautifully designed User Interface elements help to you work easily without any misunderstandings. And
            every screens were built with the same pattern for easy workflow.
          </p>
          <div className='hidden md:inline absolute right-0 bottom-0 bg-primary w-5 h-5'></div>
        </div>
      </div>

      <div className='relative px-5 md:px-12 2xl:px-64 pt-10 md:pt-36 md:w-full md:flex items-start justify-between z-20'>
        <div className='mt-10 bg-yellow-color h-80 flex md:hidden justify-center items-center'>
          <Image src={screenIcon} />
        </div>
        <div className='md:w-1/2 flex items-start justify-between'>
          <div className='hidden md:inline h-5 w-5 bg-yellow-color' />
          <div className='md:w-3/5 flex items-start justify-between mt-10 md:-mt-3'>
            <div>
              <div className='flex justify-between'>
                <p className='text-gradient tracking-tight text-5xl font-bold'>For all screens</p>
                <CornerIcon className='inline md:hidden stroke-yellow-color' />
              </div>
              <p className='mt-5'>
                You don’t have to sit on front of your monitor always. Our highly responsive platform works on all
                across the screens like tablets and smartphones as good as big screen monitors and it helps you do your
                job everywhere you want.
              </p>
            </div>
            <CornerIcon className='inline md:hidden stroke-yellow-color' />
          </div>
        </div>
        <div className='bg-yellow-color h-80 w-96 hidden md:flex justify-center items-center'>
          <Image src={screenIcon} />
        </div>
        <CornerIcon className='absolute bottom-0 -rotate-180 hidden md:inline stroke-yellow-color' />
      </div>

      <div className='relative px-5 md:px-12 2xl:px-64 pt-10 md:pt-36 md:w-full md:flex items-start justify-between z-20'>
        <div className='block md:hidden'>
          <div className='mt-10 md:mt-0 flex justify-center items-center bg-red-color h-80'>
            <Image src={driversIcon} />
          </div>
        </div>
        <div className='md:w-1/2 mt-8 md:mt-0'>
          <div className='flex justify-between items-start'>
            <p className='text-gradient tracking-tight text-5xl font-bold'>DVIRs</p>
            <CornerIcon className='inline md:hidden stroke-red-color' />
          </div>
          <p className='mt-5 md:w-2/3'>
            Paper-free DVIRs save time for drivers. Tap “+” to add pre-trip or post-trip inspection report. Tap on a
            specific status in the events section to view location and notes. Select defects (if any) from the list and
            sign DVIR. Review past DVIRs to prevents compliance errors. Notify mechanic if defects need to be corrected.
            Tap “Edit” button to edit DVIR and to fix any errors.
          </p>
        </div>
        <div className='md:w-1/2 hidden md:flex justify-between items-end'>
          <div className='flex justify-center items-center bg-red-color w-96 h-80'>
            <Image src={driversIcon} />
          </div>
          <div className='bg-red-color h-5 w-5 hidden lg:block'></div>
        </div>
        <CornerIcon className='absolute bottom-0 -rotate-180 hidden md:inline stroke-red-color' />
      </div>

      <div className='px-5 md:px-12 2xl:px-64 pt-10 md:pt-36 md:w-full md:flex items-start justify-between z-20'>
        <div className='mt-10 md:mt-0 lg:w-1/2 md:pr-10 xl:pr-44'>
          <div className='flex justify-center items-center bg-background-dark-color md:w-96 h-80'>
            <Image src={modeIcon} />
          </div>
        </div>
        <div className='relative lg:w-1/2 mt-8 md:mt-0 md:h-80'>
          <div className='flex justify-between'>
            <p className='text-gradient tracking-tight text-5xl font-bold'>Inspection mode</p>
            <CornerIcon className='stroke-black' />
          </div>
          <p className='lg:w-2/3 mt-5 text-ellipsis '>
            capable of producing and transferring the ELD records via telematics transfer methods: Wireless Web services
            and Email. In order to send the ELD records via Web services a driver must press &quot;Inspection&quot; menu
            item and then press &quot;Send Logs&quot; button. In order to send the ELD records via Email a driver must
            press &quot;Inspection&quot; menu item, press &quot;Email Logs&quot;, enter an email provided by an
            authorized safety official and press &quot;Send&quot; button.
          </p>
          <div className='hidden lg:inline absolute right-0 bottom-0 bg-black w-5 h-5' />
        </div>
      </div>

      <div className='px-5 md:px-12 2xl:px-64 pt-10 md:pt-36 md:w-full md:flex items-start justify-between z-20'>
        <div className='mt-10 bg-purple-color h-80 flex md:hidden justify-center items-center'>
          <Image src={drivingIcon} />
        </div>
        <div className='relative md:w-1/2 flex items-end justify-between'>
          <CornerIcon className='absolute top-0 -rotate-90 hidden md:inline stroke-purple-color' />
          <div className='bg-purple-color hidden md:inline h-5 w-5' />
          <div className='md:w-3/5 flex items-start justify-between mt-10 md:-mt-3 md:h-80'>
            <div>
              <div className='flex justify-between'>
                <p className='text-gradient tracking-tight text-5xl h-16 md:h-24 font-bold'>Driving mode</p>
                <CornerIcon className='inline md:hidden stroke-purple-color' />
              </div>
              <p className='pr-1'>
                Driving mode is for preventing any accidental clicks on UI, when you start your vehicle, your status
                changes to Driving automatically.
              </p>
            </div>
            <CornerIcon className='inline md:hidden stroke-purple-color' />
          </div>
        </div>
        <div className='bg-purple-color h-80 w-96 hidden md:flex justify-center items-center'>
          <Image src={drivingIcon} />
        </div>
      </div>

      <div className='relative px-5 md:px-12 2xl:px-64 pt-10 md:pt-36 md:w-full md:flex items-start justify-between z-20'>
        <div className='mt-10 md:mt-0 block md:hidden'>
          <div className='flex justify-center items-center bg-blue-color h-80'>
            <Image src={chatIcon} />
          </div>
        </div>
        <div className='md:w-1/2 mt-8 md:mt-0'>
          <div className='flex justify-between'>
            <p className='text-gradient tracking-tight text-5xl font-bold xl:w-1/6'>Chat</p>
            <CornerIcon className='inline md:hidden stroke-blue-color' />
          </div>
          <p className='mt-5 md:w-2/3 xl:w-1/2'>Communication between dispatchers and drivers through platform.</p>
        </div>
        <div className='md:w-1/2 hidden md:flex justify-between items-start'>
          <div className='flex justify-center items-center bg-blue-color w-96 h-80'>
            <Image src={chatIcon} />
          </div>
          <div className='bg-blue-color h-5 w-5 hidden lg:block'></div>
        </div>
        <CornerIcon className='absolute bottom-0 -rotate-180 hidden md:inline stroke-blue-color' />
      </div>
    </>
  )
}