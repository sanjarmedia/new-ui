import Image from 'next/image'
import Link from 'next/link'

import { Navbar } from '../src/components/Navbar'
import { DisLike, PlayIcon } from '../src/icons'
import { Footer } from '../src/components/Footer'
import { ScrollToTop } from '../src/components/ScrollToTop'

import NewsImage from '../public/image/new-web.png'

function Lessons() {
  return (
    <>
      <Navbar />
      <div className='text-sm relative z-10 pt-24'>
        <div className='flex px-5 md:px-10 xl:px-96'>
          <Link href='/support'>
            <p className='text-primary font-medium'>Support</p>
          </Link>
          <p className='text-secondary ml-5'>Dispatch Board</p>
        </div>
        <div className='text-gradient tracking-tight text-3xl md:text-5xl font-bold my-5 px-5 md:px-10 xl:px-96'>How to Lesson 3</div>
        <p className='my-10 px-5 md:px-10 xl:px-96'>
          Dealing with a rejected load? Learn how you can avoid costly losses caused <br />
          by freight damage liability
        </p>

        <div className='px-5 md:px-10 xl:px-96 flex justify-start cursor-pointer'>
          <div className='relative flex items-center justify-center'>
            <Image src={NewsImage} />
            <div
              className='absolute top-72 h-20 w-20 flex items-center justify-center rounded-full
              backdrop-filter backdrop-blur-xl cursor-pointer'
            >
              <PlayIcon />
            </div>
          </div>
        </div>
        <p className='text-lg px-5 md:px-10 xl:px-96'>
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

        <h1 className='font-bold text-4xl mt-16 mb-10 px-5 md:px-10 xl:px-96'>Has your load been rejected?</h1>

        <p className='text-lg px-5 md:px-10 xl:px-96'>
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
      </div>
      <div className='mt-24 px-5 md:px-10 xl:px-96 py-10 bg-background-color flex justify-between'>
        <p className='text-primary'>1029 people found this usefull</p>
        <div className='flex'>
          <DisLike className='fill-default-icon-color hover:fill-primary cursor-pointer' />
          <DisLike className='ml-8 rotate-180 fill-default-icon-color hover:fill-primary cursor-pointer' />
        </div>
      </div>

      <div className='relative z-10 mt-40 px-5 md:px-12 xl:px-64'>
        <div className='flex items-end md:items-center justify-between'>
          <p className='text-gradient tracking-tight text-5xl font-bold'>Releted articles</p>
        </div>
      </div>

      {/*Lessons Video*/}
      <div className='text-sm mt-14 px-5 md:px-12 xl:px-64 md:flex items-center justify-between'>
        <div className='md:w-96'>
          <div className='h-80 relative flex items-center justify-center bg-blue-color cursor-pointer'>
            <div
              className='h-20 w-20 flex items-center justify-center rounded-full backdrop-opacity-10 backdrop-invert
            bg-white/30'
            >
              <PlayIcon />
            </div>
          </div>
          <h1 className='font-bold text-3xl mt-10 mb-5'>How to Lesson 1</h1>
          <p>Lorem ipsum dolor sit amet, consec tetur adipiscing tetur adipiscing elit.</p>
        </div>
        <div className='mt-24 md:mt-0 md:w-96'>
          <div className='h-80 relative flex items-center justify-center bg-blue-color cursor-pointer'>
            <div
              className='h-20 w-20 flex items-center justify-center rounded-full backdrop-opacity-10 backdrop-invert
            bg-white/30'
            >
              <PlayIcon />
            </div>
          </div>
          <h1 className='font-bold text-3xl mt-10 mb-5'>How to Lesson 1</h1>
          <p>Lorem ipsum dolor sit amet, consec tetur adipiscing tetur adipiscing elit.</p>
        </div>
        <div className='mt-24 md:mt-0 md:w-96'>
          <div className='h-80 relative flex items-center justify-center bg-blue-color cursor-pointer'>
            <div
              className='h-20 w-20 flex items-center justify-center rounded-full backdrop-opacity-10 backdrop-invert
            bg-white/30'
            >
              <PlayIcon />
            </div>
          </div>
          <h1 className='font-bold text-3xl mt-10 mb-5'>How to Lesson 1</h1>
          <p>Lorem ipsum dolor sit amet, consec tetur adipiscing tetur adipiscing elit.</p>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  )
}
export default Lessons
