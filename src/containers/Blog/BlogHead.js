import {NextIcon, SearchIcon} from '../../icons';

export default function BlogHead(){
  return(
    <>
      <div className='md:w-full font-inter'>
        <div className='w-full flex justify-center pt-44 font-bold tracking-tight'>
          <div className='tracking-tight text-4xl md:text-5xl lg:text-7xl h-24 text-center font-inter
           bg-gradient-to-r bg-clip-text text-transparent from-primary via-black dark:via-white to-primary animate-text'
          >
            Blog & News
          </div>
        </div>

        <div className='text-md text-center'>Discover the latest about our products</div>

        <div className='mt-7 flex justify-center'>
          <div className='relative z-10 w-72 md:w-96'>
            <input
              type='search'
              className='w-full md:px-10 py-2 bg-background-color border border-input-border-color rounded-3xl
              placeholder:text-secondary'
              placeholder='Search with keywords'
            />
            <button
              className='absolute top-[3px] right-1 px-5 py-1.5 bg-primary flex items-center justify-between text-white
               rounded-3xl hover:bg-hover duration-300'
            >
              Search
              <NextIcon className='stroke-white ml-2' />
            </button>
            <SearchIcon className='absolute left-3.5 top-3 hidden md:inline' />
          </div>
        </div>
      </div>
    </>
  )
}