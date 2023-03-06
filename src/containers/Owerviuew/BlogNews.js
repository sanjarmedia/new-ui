import Image from 'next/image';
import News from '../../../public/image/news.png';
import Link from 'next/link';
import {NextIcon} from '../../icons';
import News2 from '../../../public/image/news2.png';
import News3 from '../../../public/image/news3.png';

export default function BlogNews(){
  return(
    <>
      <div className='pt-36 z-20'>
        <div className='pt-32 pl-5 md:pl-10 xl:pl-64 md:w-full tracking-tighter md:tracking-normal'>
          <h1 className='text-primary font-medium'>Blog & News</h1>
          <div className='bg-gradient-to-r bg-clip-text text-transparent from-primary via-black dark:via-white
          to-primary animate-text font-bold mt-4 text-2xl md:text-4xl lg:text-5xl tracking-tight'
          >
            Discover the latest about <br/>
            our products
          </div>
        </div>
      </div>

      <div className='mt-5 lg:mt-24 px-5 md:px-12 2xl:px-64 md:w-full md:flex items-start justify-between'>
        <div className='pr-5'>
          <Image src={News}/>
        </div>
        <div className='mt-10 md:pl-5 lg:pl-0 md:mt-0 md:w-3/5'>
          <p className='text-primary -mt-1'>Jun 2, 2022</p>
          <p className='my-5 md:mt-4 font-bold md:text-xl lg:text-3xl md:tracking-tight lg:tracking-normal'>
            What you can do to avoid freight <br/> damage liability
          </p>
          <p className='lg:w-7/12 md:tracking-tight lg:tracking-normal text-sm'>
            Dealing with a rejected load? Learn how you can avoid costly losses caused by freight damage liability
          </p>
          <div className='lg:mt-7 xl:mt-12 font-medium text-sm'>
            <Link href='/news'>
              <button
                className='flex items-center justify-between bg-background-color text-primary rounded-full px-4
             py-2.5'
              >
                Read more
                <NextIcon className='stroke-primary ml-3'/>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-5 lg:mt-24 px-5 md:px-12 2xl:px-64 md:w-full md:flex items-start justify-between'>
        <div className='pr-5'>
          <Image src={News2}/>
        </div>
        <div className='mt-10 md:pl-5 lg:pl-0 md:mt-0 md:w-3/5'>
          <p className='text-primary -mt-1'>Jun 2, 2022</p>
          <p className='my-5 md:mt-4 font-bold md:text-xl lg:text-3xl md:tracking-tight lg:tracking-normal'>
            What you can do to avoid freight <br/> damage liability
          </p>
          <p className='lg:w-7/12 md:tracking-tight lg:tracking-normal text-sm'>
            Dealing with a rejected load? Learn how you can avoid costly losses caused by freight damage liability
          </p>
          <div className='lg:mt-7 xl:mt-12 font-medium text-sm'>
            <Link href='/news'>
              <button
                className='flex items-center justify-between bg-background-color text-primary rounded-full px-4
             py-2.5'
              >
                Read more
                <NextIcon className='stroke-primary ml-3'/>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-5 lg:mt-24 px-5 md:px-12 2xl:px-64 md:w-full md:flex items-start justify-between'>
        <div className='pr-5'>
          <Image src={News3}/>
        </div>
        <div className='mt-10 md:pl-5 lg:pl-0 md:mt-0 md:w-3/5'>
          <p className='text-primary -mt-1'>Jun 2, 2022</p>
          <p className='my-5 md:mt-4 font-bold md:text-xl lg:text-3xl md:tracking-tight lg:tracking-normal'>
            What you can do to avoid freight <br/> damage liability
          </p>
          <p className='lg:w-7/12 md:tracking-tight lg:tracking-normal text-sm'>
            Dealing with a rejected load? Learn how you can avoid costly losses caused by freight damage liability
          </p>
          <div className='lg:mt-7 xl:mt-12 font-medium text-sm'>
            <Link href='/news'>
              <button
                className='flex items-center justify-between bg-background-color text-primary rounded-full px-4
             py-2.5'
              >
                Read more
                <NextIcon className='stroke-primary ml-3'/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}