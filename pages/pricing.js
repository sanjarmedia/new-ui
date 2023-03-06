
import { Navbar } from '../src/components/Navbar'
import { Footer } from '../src/components/Footer'
import { Animation } from '../src/components/Animation'
import { ContactUs } from '../src/components/ContactUs'
import { ScrollToTop } from '../src/components/ScrollToTop'

import BackgroundNavbar from '../src/components/BackgroundNavbar'
import PricingPlans from '../src/containers/Pricing/PricingPlans'

function Pricing() {
  return (
    <>
      <Navbar />

      <PricingPlans />

      <ContactUs />

      <Animation />

      <Footer />

      <ScrollToTop />

      <BackgroundNavbar />
    </>
  )
}

export default Pricing
