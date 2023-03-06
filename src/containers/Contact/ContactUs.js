import {MessageIcon, NextIcon, SalesIcon, SupportIcons} from '../../icons';

export default function ContactUs(){
  return(
    <>
      <div className='px-5 pb-24 mt-24 md:flex justify-center'>
        <div className='md:w-96 h-80 mt-14 lg:mt-20 p-8 border rounded-2xl'>
          <div>
            <SupportIcons />
            <p className='font-bold text-3xl mt-5 md:mt-8'>Support team</p>
            <p className='md:mt-5'>
              Phone: +1 (000) 000-0000 <br />
              Email: support@new.com
            </p>
          </div>
        </div>
        <div className='md:w-96 h-80 mt-14 md:ml-24 lg:mt-20 p-8 border rounded-2xl'>
          <div>
            <SalesIcon />
            <p className='font-bold text-3xl mt-5 md:mt-8'>Sales team</p>
            <p className='md:mt-5'>
              Phone: +1 (000) 000-0000 <br />
              Email: sales@new.com
            </p>
          </div>
        </div>
        <div className='md:w-96 h-80 mt-14 md:ml-24 lg:mt-20 p-8 border rounded-2xl'>
          <div>
            <MessageIcon />
            <p className='font-bold text-3xl mt-5 md:mt-8'>Quick Message</p>
            <p className='md:mt-5'>
              If you have any questions or offers. <br />
              send us your messages
            </p>
            <button
              className='mt-5 flex justify-center items-center bg-primary rounded-3xl text-white
            px-3 py-1.5 md:px-5 md:py-2.5'
            >
              Send Message
              <NextIcon className='stroke-white ml-2' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}