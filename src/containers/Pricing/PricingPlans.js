import PricingStandard from './PricingStandard';
import PricingStandardPlus from './PricingStandardPlus';
import PricingBusiness from './PricingBusiness';
import PricingBusinessPlus from './PricingBusinessPlus';

export default function PricingPlans(){
  return(
    <>
      <div className='pt-44 text-center font-inter'>
        <div className='tracking-tight m-auto pt-2 text-4xl font-bold h-14 md:h-24 md:w-[500px] md:text-7xl
           bg-gradient-to-r bg-clip-text text-transparent from-primary via-black dark:via-white to-primary animate-text'
        >
          Pricing Plans
        </div>
        <p className='text-[13px] md:text-base pt-3'>Pricing built for businesses of all sizes.</p>
      </div>
      <div className='mt-32 flex justify-center font-inter'>
        <div className='grid gap-32 md:grid-cols-1 lg:grid-cols-2'>
          <PricingStandard />

          <PricingStandardPlus />

          <PricingBusiness />

          <PricingBusinessPlus />
        </div>
      </div>
    </>
  )
}