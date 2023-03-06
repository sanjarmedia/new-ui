import { Navbar } from '../src/components/Navbar'
import { Footer } from '../src/components/Footer'
import { Animation } from '../src/components/Animation'
import { Form } from '../src/containers/Contact/Form'
import { ScrollToTop } from '../src/components/ScrollToTop';
import BackgroundNavbar from '../src/components/BackgroundNavbar';
import ContactUs from '../src/containers/Contact/ContactUs';
import ContactHead from '../src/containers/Contact/ContactHead';

function Contact() {
  return (
    <>
      <Navbar />

      <ContactHead />

      <Form />

      <ContactUs />

      <Animation />

      <Footer />

      <ScrollToTop />

      <BackgroundNavbar />
    </>
  )
}

export default Contact
