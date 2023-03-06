import { Navbar } from '../src/components/Navbar'
import { Animation } from '../src/components/Animation'
import { Footer } from '../src/components/Footer'
import { ScrollToTop } from '../src/components/ScrollToTop';
import BackgroundNavbar from '../src/components/BackgroundNavbar';
import BlogHead from '../src/containers/Blog/BlogHead';
import BlogNews from '../src/containers/Blog/BlogNews';

function Blog() {


  return (
    <>
      <Navbar />

      <BlogHead />

      <BlogNews />

      <Footer />

      <ScrollToTop />

      <Animation className='absolute top-0' />

      <BackgroundNavbar />
    </>
  )
}

export default Blog
