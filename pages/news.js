import Image from 'next/image'
import Link from 'next/link'

import { Navbar } from '../src/components/Navbar'
import { Footer } from '../src/components/Footer'
import { NextIcon } from '../src/icons'
import { ScrollToTop } from '../src/components/ScrollToTop'

//IMAGE
import NewsImage from '../public/image/new-web.png'
import News3 from '../public/image/news3.png'
import NewsMobile from '../public/image/news-mobile.png'



function News() {
  return (
    <>
      <Navbar />
      <div className='relative z-10 pt-24 text-sm'>
        <div className='flex px-5 md:px-10 2xl:px-96'>
          <Link href='/blog'>
            <p className='text-primary font-medium cursor-pointer'>News</p>
          </Link>
          <p className='text-secondary ml-5'>Jun 2, 2022</p>
        </div>
        <div className='md:w-5/6 text-gradient tracking-tight text-3xl lg:text-5xl md:h-28 font-black my-5 px-5 md:px-10 2xl:px-96'>
          What you can do to avoid freight <br className='hidden md:block' />
          damage liability
        </div>
        <p className='mb-10 px-5 md:px-10 2xl:px-96 text-sm'>
          Dealing with a rejected load? Learn how you can avoid costly losses caused <br />
          by freight damage liability
        </p>

        <div className='px-5 md:px-10 2xl:px-96'>
          <Image src={NewsImage} />
        </div>
        <p className='text-lg px-5 md:px-10 2xl:px-96'>
          <br />
          <br />
          How much has freight damage cost you?
          <br />
          <br />
          As you know, you can lose days, if not weeks, of your time when you’re liable for freight damage.
          <br />
          <br />
          The rerouting and reworking process is a hassle, and can even end in you losing money on a trip.
          <br />
          <br />
          The issues are only compounded when you know that the freight damage
          <span className='text-primary'>
            <Link href='#'>
              <u> wasn’t your driver’s fault</u>
            </Link>
          </span>
          — but you’re being held liable regardless.
          <br />
          <br />
          In this blog, we’ll give you the insight you need to deal with a rejected load and prove your driver’s
          innocence if the damage was not their fault.
        </p>

        <h1 className='font-bold text-3xl mt-24 mb-12 px-5 md:px-10 2xl:px-96'>Has your load been rejected?</h1>

        <p className='text-lg px-5 md:px-10 2xl:px-96'>
          Loads can be rejected for a variety of reasons, but they’re most commonly rejected because of damaged freight.
          <br />
          <br />
          The damage may or may not have been caused by your driver’s actions on the road, but regardless, they’ll be
          the very first person to be blamed.
          <br />
          <br />
          Imagine this:
          <br />
          <br />
          Your driver notices that a pallet wasn’t properly wrapped when it was loaded into their trailer by the
          shipper.
          <br />
          <br />
          They think, “well if I drive safely it will be fine.”
          <br />
          <br />
          So, they drive as safely as possible but along the way, the pallet’s wrapping tears open and damages the
          products.
          <br />
          <br />
          This puts your driver and your business in a precarious situation. Your driver wasn’t driving in a manner that
          would damage the freight, had it been wrapped correctly–but nonetheless, the damage occurred while they were
          driving.
          <br />
          <br />
          And sure enough, when your driver gets to the receiver’s location, they’re being held liable for the damage.
          <br />
          <br />
          You don’t have any evidence to show that it wasn’t their fault–so now you have to deal with a potentially
          weeks-long process that’s going to set your business back financially.
          <br />
          <br />
          Think about how much time and money you could have saved if you and your driver were properly prepared ahead
          of time?
          <br />
          <br />
          The consequences of not proving your driver’s innocence can prove to be costly for your business and your
          profits.
        </p>

        <div className='bg-background-color text-center flex justify-center px-5 md:px-10 2xl:px-96 py-32 mt-36'>
          <div>
            <p className='text-primary'>Subscribe to our News latter</p>
            <p className='text-gradient tracking-tight font-bold text-5xl h-14 mt-5'>Stay updated</p>
            <div className='mt-14 flex justify-center'>
              <div className='relative w-72 md:w-96'>
                <input
                  type='email'
                  className='w-full py-2 bg-white border border-input-border-color rounded-3xl placeholder:text-secondary'
                  placeholder='Your email'
                />
                <button className='absolute top-[3px] right-1 px-5 py-2 bg-primary flex items-center justify-between text-white rounded-3xl'>
                  Search
                  <NextIcon className='stroke-white ml-2' />
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className='pt-24 px-5 md:px-10 2xl:px-96 text-gradient tracking-tight font-bold text-5xl md:w-7/12'>Releted articles</p>
        <div className='px-5 md:px-10 2xl:px-96 mt-5 lg:mt-24 md:w-full md:flex items-start justify-between'>
          <div className='pr-5 lg:pr-0 hidden md:block'>
            <Image src={News3} />
          </div>
          <div className='block md:hidden'>
            <Image src={NewsMobile} />
          </div>
          <div className='mt-10 md:pl-5 lg:pl-0 md:mt-0 md:w-3/5'>
            <p className='text-primary -mt-1'>Jun 2, 2022</p>
            <p className='my-5 md:mt-5 font-bold md:text-xl lg:text-2xl md:tracking-tight lg:tracking-normal'>
              What you can do to avoid freight <br />
              damage liability
            </p>
            <p className='pt-4 my-0 lg:my-5 lg:w-7/12 md:tracking-tight lg:tracking-normal'>
              Need to plan your loads faster than ever before? Find out how a transportation management system can help
              your business.
            </p>
            <div className='mt-4 font-medium'>
              <button
                className='flex items-center justify-between bg-background-color text-primary rounded-full px-4
             py-2.5'
              >
                Read more
                <NextIcon className='stroke-primary ml-3' />
              </button>
            </div>
          </div>
        </div>
        <div className='px-5 md:px-10 2xl:px-96 mt-5 lg:mt-24 md:w-full md:flex items-start justify-between'>
          <div className='pr-5 lg:pr-0 hidden md:block'>
            <Image src={News3} />
          </div>
          <div className='block md:hidden'>
            <Image src={NewsMobile} />
          </div>
          <div className='mt-10 md:pl-5 lg:pl-0 md:mt-0 md:w-3/5'>
            <p className='text-primary -mt-1'>Jun 2, 2022</p>
            <p className='my-5 md:mt-5 font-bold md:text-xl lg:text-2xl md:tracking-tight lg:tracking-normal'>
              What you can do to avoid freight <br />
              damage liability
            </p>
            <p className='pt-4 my-0 lg:my-5 lg:w-7/12 md:tracking-tight lg:tracking-normal'>
              Need to plan your loads faster than ever before? Find out how a transportation management system can help
              your business.
            </p>
            <div className='mt-4 font-medium'>
              <button
                className='flex items-center justify-between bg-background-color text-primary rounded-full px-4
             py-2.5'
              >
                Read more
                <NextIcon className='stroke-primary ml-3' />
              </button>
            </div>
          </div>
        </div>
        <div className='px-5 md:px-10 2xl:px-96 mt-5 lg:mt-24 md:w-full md:flex items-start justify-between'>
          <div className='pr-5 lg:pr-0 hidden md:block'>
            <Image src={News3} />
          </div>
          <div className='block md:hidden'>
            <Image src={NewsMobile} />
          </div>
          <div className='mt-10 md:pl-5 lg:pl-0 md:mt-0 md:w-3/5'>
            <p className='text-primary -mt-1'>Jun 2, 2022</p>
            <p className='my-5 md:mt-5 font-bold md:text-xl lg:text-2xl md:tracking-tight lg:tracking-normal'>
              What you can do to avoid freight <br />
              damage liability
            </p>
            <p className='pt-4 my-0 lg:my-5 lg:w-7/12 md:tracking-tight lg:tracking-normal'>
              Need to plan your loads faster than ever before? Find out how a transportation management system can help
              your business.
            </p>
            <div className='mt-4 font-medium'>
              <button
                className='flex items-center justify-between bg-background-color text-primary rounded-full px-4
             py-2.5'
              >
                Read more
                <NextIcon className='stroke-primary ml-3' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  )
}

export default News
