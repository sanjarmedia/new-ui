import {
  ColorsIcon,
  CornerIcon,
  DarkModeIcons,
  EasyIcon,
  ResponsiveIcons
} from '../../icons';

export default function Feature(){
  return(
    <>
      <div className='pt-44 z-20 md:pl-5'>
        <div className='pt-32 pl-5 md:pl-12 2xl:pl-64 md:w-full tracking-tighter'>
          <h1 className='text-primary font-medium'>Why our Platform?</h1>
          <div className='tracking-tight mt-3 text-4xl lg:text-5xl bg-gradient-to-r bg-clip-text text-transparent
             from-primary via-black dark:via-white to-primary animate-text font-bold'
          >
            Beautifully designed <br/>
            and easy to use
          </div>
        </div>
      </div>
      <div className='md:w-full md:px-12 2xl:px-64 mt-32 md:grid md:grid-cols-2 md:gap-4 z-20'>
        <div className='px-5 md:pr-10 xl:pr-48'>
          <div className='flex justify-between items-start'>
            <EasyIcon/>
            <CornerIcon className='stroke-primary'/>
          </div>
          <div className='mt-5 text-3xl font-bold'>Easy to use</div>
          <p className='text-base mt-5'>
            The navigation of this platform was designed very convenient and easy to use and the same patterns is used
            around the platform. That is why you dont need to have good computer skill to use our platform.
          </p>
        </div>
        <div className='px-5 xl:pl-32 mt-10 md:mt-0'>
          <div className='flex justify-between items-start'>
            <ColorsIcon/>
            <CornerIcon className='stroke-primary'/>
          </div>
          <div className='mt-5 text-3xl font-bold'>Colors</div>
          <p className='text-base mt-5'>
            Considering the existing user base and demographics data we knew that the safest color is blue. Every
            system you look you see the blue is the main color. Blue has calmness, giving friendly feelings and it
            doesn’t make you feel bored. That’s why we chose Blue as a main color to you to work safe.
          </p>
        </div>
        <div className='px-5 mt-24 md:pr-10 xl:pr-48'>
          <div className='flex justify-between items-start'>
            <ResponsiveIcons/>
            <CornerIcon className='stroke-primary'/>
          </div>
          <div className='mt-5 text-3xl font-bold'>Responsive UI</div>
          <p className='text-base mt-5'>
            You don’t have to sit on front of your monitor always. Our highly responsive platform works on all across
            the screens like tablets and smartphones as good as big screen monitors and it helps you do your job
            everywhere you want.
          </p>
        </div>
        <div className='px-5 mt-24 pl-5 xl:pl-32'>
          <div className='flex justify-between items-start'>
            <DarkModeIcons/>
            <CornerIcon className='stroke-primary'/>
          </div>
          <div className='mt-5 text-3xl font-bold'>Dark mode</div>
          <p className='text-base mt-5'>
            Dark Mode is a systemwide appearance setting that uses a dark color palette to provide a comfortable
            viewing experience tailored for low-light environments. We bring you the best color shades of Dark Mode.
          </p>
        </div>
      </div>
    </>
  )
}