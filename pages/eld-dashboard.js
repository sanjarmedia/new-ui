import { Navbar } from '../src/components/Navbar'
import { Footer } from '../src/components/Footer'
import { Animation } from '../src/components/Animation'
import { ScrollToTop } from '../src/components/ScrollToTop';

import BackgroundNavbar from '../src/components/BackgroundNavbar';
import EldHead from '../src/containers/Eld-dashboard/EldHead';
import UserComment from '../src/components/UserComment';
import Feature from '../src/containers/Eld-dashboard/Feature';

function EldDashboard() {
  return (
    <>
      <Navbar />

      <EldHead />

      <UserComment />

      <Feature />

      <Animation />

      <Footer />

      <ScrollToTop />

      <BackgroundNavbar />
    </>
  )
}

export default EldDashboard
