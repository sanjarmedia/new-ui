import { Navbar } from '../src/components/Navbar'
import { Animation } from '../src/components/Animation'
import { Footer } from '../src/components/Footer'
import { ContactUs } from '../src/components/ContactUs'
import { ScrollToTop } from '../src/components/ScrollToTop';
import ProductCard from '../src/containers/Owerviuew/ProductCard';
import UserComment from '../src/containers/Owerviuew/UserComment';
import Feature from '../src/containers/Owerviuew/Feature';
import HeadOwerviuew from '../src/containers/Owerviuew/HeadOwerviuew';
import BlogNews from '../src/containers/Owerviuew/BlogNews';
import BackgroundNavbar from '../src/components/BackgroundNavbar';


export default function Home() {

  return (
    <div className='relative font-inter'>
      <main>
        <Navbar/>

        <HeadOwerviuew />

        <Feature />

        <UserComment />

        <ProductCard />

        <BlogNews />

        <ContactUs/>

        <Footer/>

        <ScrollToTop/>

        <Animation />

        <BackgroundNavbar />
      </main>
    </div>
  )
}
