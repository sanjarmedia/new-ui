import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import arrowTop from '../../public/image/arrow-top.svg'

export function ScrollToTop() {
  const [backToTopButton, setBeckToTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBeckToTopButton(true)
      } else {
        setBeckToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      {backToTopButton && (
        <div
          className='z-40 px-3 py-2.5 border-2 opacity-60 rounded-full w-16 fixed bottom-20 md:right-16 cursor-pointer sm:bottom-9 right-0 w-12 h-12'
          onClick={scrollUp}
        >
          <Image src={arrowTop} />
        </div>
      )}
    </div>
  )
}
