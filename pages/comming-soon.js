
import { Navbar } from '../src/components/Navbar'
import { Form } from '../src/components/Form'
import { Animation } from '../src/components/Animation';

export default function CommingSoon() {
  return (
    <>
      <Navbar />
      <div className='relative'>
        <div className='relative z-10'>
          <div className='mt-52 text-center'>
            <h1 className='font-bold h-16 md:h-44 text-5xl md:text-9xl whitespace-pre-wrap font-inter
           bg-gradient-to-r bg-clip-text text-transparent from-primary via-black dark:via-white to-primary animate-text'
            >
              Coming soon
            </h1>

            <p className='text-[13px] md:text-base text-center'>
              We are launching NEW platform very soon. <br /> Stay tuned.
            </p>

            {/*<Form />*/}
          </div>
        </div>
      </div>
      <Animation/>
      <div
        className='hidden md:block absolute top-0 -z-10 bg-background-main bg-no-repeat bg-center bg-auto w-full h-screen'/>
    </>
  )
}
