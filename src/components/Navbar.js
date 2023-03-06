import { equals } from 'ramda'
import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'

import Image from 'next/image'
import Link from 'next/link'


import {
  ExitIcon,
  FacebookIcon,
  FrameIcon,
  GetInBoldIcon,
  InstagramIcon,
  Next2Icon,
  NextIcon,
  YoutubeIcon
} from '../icons'
import { ProductsModal } from './ProductsModal'
import Logo from '../assets/images/logo.png'

export function Navbar() {
  const { pathname } = useRouter()

  const [navbar, setNavbar] = useState(false)

  const [openModal, setCloseModal] = useState(false)

  const [open, setOpen] = useState(0)

  const handleOpen = value => {
    setOpen(open === value ? 0 : value)
  }

  function onOpenModal() {
    setCloseModal(true)
  }

  function onCloseModal() {
    setCloseModal(false)
  }

  function productPathColor() {
    if (openModal) {
      return 'text-primary'
    }

    if (equals(pathname, '/eld-dashboard') || equals(pathname, '/drivers-app') || equals(pathname, '/eld-devices')) {
      return 'text-primary'
    }

    if (equals(pathname, '/pricing') || equals(pathname, '/contact')) {
      return 'text-black'
    }

    return 'text-black'
  }

  function iconProductsPathColor(){
    if (equals(pathname, '/eld-dashboard') || equals(pathname, '/drivers-app') || equals(pathname, '/eld-devices')) {
      return 'stroke-primary'
    }

    if (equals(pathname, '/pricing') || equals(pathname, '/contact')) {
      return 'stroke-black'
    }

    return 'stroke-black'
  }

  function blockPathColor() {
    if (equals(pathname, '/blog')) {
      return 'text-primary'
    }

    if (equals(pathname, '/pricing') || equals(pathname, '/contact')) {
      return 'text-black'
    }

    return 'text-black'
  }

  function iconBlockPathColor() {
    if (equals(pathname, '/blog')) {
      return 'stroke-primary'
    }

    if (equals(pathname, '/pricing') || equals(pathname, '/contact')) {
      return 'stroke-black'
    }

    return 'stroke-black'
  }

  function pricingPathColor() {
    if (equals(pathname, '/pricing')) {
      return 'text-primary'
    }

    if (equals(pathname, '/contact')) {
      return 'text-black'
    }

    return 'text-black'
  }

  function iconPricingPathColor() {
    if (equals(pathname, '/pricing')) {
      return 'stroke-primary'
    }

    if (equals(pathname, '/contact')) {
      return 'stroke-black'
    }

    return 'stroke-black'
  }

  function supportPathColor() {
    if (equals(pathname, '/support')) {
      return 'text-primary'
    }

    if (equals(pathname, '/pricing') || equals(pathname, '/contact')) {
      return 'text-black'
    }

    return 'text-black'
  }

  function iconSupportPathColor() {
    if (equals(pathname, '/support')) {
      return 'stroke-primary'
    }

    if (equals(pathname, '/pricing') || equals(pathname, '/contact')) {
      return 'stroke-black'
    }

    return 'stroke-black'
  }

  function contactPathColor() {
    if (equals(pathname, '/contact')) {
      return 'text-primary'
    }

    if (equals(pathname, '/pricing')) {
      return 'text-black'
    }

    return 'text-black'
  }

  function iconContactPathColor() {
    if (equals(pathname, '/contact')) {
      return 'stroke-primary'
    }

    if (equals(pathname, '/pricing')) {
      return 'stroke-black'
    }

    return 'stroke-black'
  }

  function Icon({ open }) {
    return (
      <>
        {open === 1 ? (
          <Next2Icon className={`${iconProductsPathColor()} ' ease-in-out duration-300 rotate-90 mt-5 '`} />
        ) : (
          <Next2Icon className={`${iconProductsPathColor()} ' ease-in-out duration-300 -rotate-90 mt-5 '`}  />
        )}
      </>
    )
  }


  const activeNavbar =
    'z-40 fixed top-0 bottom-0 left-0 right-0 lg:hidden block text-black px-5 py-8' + ' backdrop-blur-3xl bg-white '
  const deNavbar = 'hidden'

  return (
    <nav className='relative z-50 w-full mt-3'>
      <div className='lg:flex justify-between md:items-center lg:max-w-8xl px-5 md:px-12 xl:px-64'>
        <div>
          <div className='flex items-center justify-between py-3 lg:block'>
            <Link href='/'>
              <div>
                <Image src={Logo} className='cursor-pointer' />
              </div>
            </Link>

            <div className='lg:hidden flex'>
              <Link href='http://app.neweldworld.com'>
                <div
                  className='mr-5 flex items-center px-4 py-2 bg-primary rounded-full text-white
                hover:bg-hover'
                >
                  <p className='mr-3 text-base text-sm'>Sign in</p>

                  <NextIcon className='stroke-white' />
                </div>
              </Link>

              {navbar ? (
                <Link href='http://app.neweldworld.com'>
                  <div
                    className='fixed z-50 mr-5 flex items-center px-4 py-2 bg-primary rounded-full text-white
                     hover:bg-hover'
                  >
                    <p className='mr-3 text-base text-sm'>Sign in</p>

                    <NextIcon className='stroke-white' />
                  </div>
                </Link>
              ) : (
                <div className='hidden'></div>
              )}

              <button
                className='z-50 p-2 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <ExitIcon className='fixed right-5 top-8' /> : <FrameIcon className='stroke-black' />}
              </button>
            </div>
          </div>
        </div>

        <div className='flex'>
          <div className='flex-1 justify-self-center pb-3 mt-8 hidden lg:block lg:pb-0 lg:mt-0'>
            <ul className='text-sm items-center justify-center space-y-8 lg:flex lg:space-x-10 lg:space-y-0'>
              <li className='hover:text-primary'>
                <button onClick={onOpenModal} className={productPathColor()}>
                  Products
                </button>
              </li>

              <li className={`${blockPathColor()} hover:text-primary`}>
                <Link href='/blog'>Blog</Link>
              </li>

              <li className={`${pricingPathColor()} hover:text-primary`}>
                <Link href='/pricing'>Pricing</Link>
              </li>

              <li className={`${supportPathColor()} hover:text-primary`}>
                <Link href='/support'>Support</Link>
              </li>

              <li className={`${contactPathColor()} hover:text-primary`}>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='hidden lg:block'>
          <Link href='http://app.neweldworld.com'>
            <button
              className='flex items-center px-4 py-2 bg-primary rounded-full text-white
             hover:bg-hover'
            >
              <p className='mr-3 text-sm'>Sign in</p>

              <NextIcon className='stroke-white' />
            </button>
          </Link>
        </div>
      </div>

      {/* mobile splash menu */}
      <div className={navbar ? activeNavbar : deNavbar}>
        <Link href='/'>
          <a>
            <Image src={Logo} className='relative z-50' />
          </a>
        </Link>

        <div className='fixed -top-56 bg-background-nav bg-no-repeat bg-center bg-auto w-full h-full' />

        <div className='mt-16 relative z-50 h-auto'>
          <div className='pt-20 w-full'>
            <Fragment>
              <Accordion open={open === 1} onClick={() => handleOpen(1)} icon={<Icon open={open} />}>
                <AccordionHeader className='cursor-pointer z-50'>
                  <div className='mt-10 w-full flex items-center justify-between text-2xl font-bold cursor-pointer'>
                    <p className={productPathColor()}>Products</p>
                  </div>
                </AccordionHeader>
                <AccordionBody className='relative z-50 h-fit bg-white font-inter pl-5'>
                  <Link href='/eld-dashboard'>
                    <div className='pb-2 mt-5 w-full flex items-center justify-between text-2xl font-bold cursor-pointer'>
                      <p>ELD Dashboard</p>
                      <GetInBoldIcon className='stroke-black' />
                    </div>
                  </Link>
                  <hr className='border-[#878787] border-1' />
                  <Link href='/drivers-app'>
                    <div className='pb-2 mt-10 w-full flex items-center justify-between text-2xl font-bold cursor-pointer'>
                      <p>Drivers’ App</p>
                      <GetInBoldIcon className='stroke-black' />
                    </div>
                  </Link>
                  <hr className='border-[#878787] border-1' />
                  <Link href='/eld-devices'>
                    <div className='pb-2 mt-10 w-full flex items-center justify-between text-2xl font-bold cursor-pointer'>
                      <p>ELD Devices</p>
                      <GetInBoldIcon className='stroke-black' />
                    </div>
                  </Link>
                </AccordionBody>
              </Accordion>
              <hr />
            </Fragment>

            <hr className='border-[#878787] border-1' />

            <Link href='/blog'>
              <div className='relative z-10 pb-2 mt-10 w-full flex items-center justify-between text-2xl font-bold cursor-pointer'>
                <p className={blockPathColor()}>Blog</p>
                <GetInBoldIcon className={`${iconBlockPathColor()}`} />
              </div>
            </Link>

            <hr className='border-[#878787] border-1' />

            <Link href='/pricing'>
              <div className='relative z-10 pb-2 mt-10 w-full flex items-center justify-between text-2xl font-bold cursor-pointer'>
                <p className={pricingPathColor()}>Pricing</p>
                <GetInBoldIcon className={iconPricingPathColor()} />
              </div>
            </Link>

            <hr className='border-[#878787] border-1' />

            <Link href='/support'>
              <div className='relative z-10 pb-2 mt-10 w-full flex items-center justify-between text-2xl font-bold cursor-pointer'>
                <p className={supportPathColor()}>Support</p>
                <GetInBoldIcon className={iconSupportPathColor()} />
              </div>
            </Link>

            <hr className='border-[#878787] border-1' />

            <Link href='/contact'>
              <button className='relative z-50 pb-2 mt-10 w-full flex items-center justify-between text-2xl font-bold cursor-pointer'>
                <p className={contactPathColor()}>Contact</p>
                <GetInBoldIcon className={iconContactPathColor()} />
              </button>
            </Link>

            <hr className='border-[#878787] border-1' />
          </div>
        </div>

        <p className='mt-28 text-[13px]'>© New ELD World 2022. All rights reserved.</p>

        <div className='mt-3 flex items-center justify-between w-24'>
          <FacebookIcon />
          <YoutubeIcon />
          <InstagramIcon />
        </div>
      </div>

      <ProductsModal open={openModal} close={onCloseModal} />
    </nav>
  )
}
