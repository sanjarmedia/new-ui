import { Navbar } from '../src/components/Navbar'
import { Footer } from '../src/components/Footer'
import { Animation } from '../src/components/Animation'
import { ContactUs } from '../src/components/ContactUs'
import { ScrollToTop } from '../src/components/ScrollToTop'

import BackgroundNavbar from '../src/components/BackgroundNavbar'
import SupportHead from '../src/containers/Support/SupportHead'
import SupportEldDashboard from '../src/containers/Support/SupportEldDashboard'
import SupportDriverApp from '../src/containers/Support/SupportDriverApp'
import SupportElddevices from '../src/containers/Support/SupportElddevices'
import Faq from '../src/containers/Support/Faq'

function Support() {


  return (
    <>
      <Navbar />

      <SupportHead />

      <SupportEldDashboard />

      <SupportDriverApp />

      <SupportElddevices />

      <Faq />

      <Animation className='absolute top-0' />

      <ContactUs />

      <Footer />
      <ScrollToTop />

      <BackgroundNavbar />
    </>
  )
}

export default Support
