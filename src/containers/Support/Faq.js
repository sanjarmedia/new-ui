import {Fragment, useState} from 'react';
import {Accordion, AccordionBody, AccordionHeader} from '@material-tailwind/react';
import {MinusIcon, PlusIcon} from '../../icons';

export default function Faq(){
  const [open, setOpen] = useState(0)
  const handleOpen = value => {
    setOpen(open === value ? 0 : value)
  }
  return(
    <>
      <div className='px-5 mb-24 md:px-10 xl:px-96 mt-52'>
        <p className='text-primary mb-5'>FAQs</p>
        <p className='text-gradient tracking-tight font-bold text-3xl md:text-5xl mb-24'>
          Frequently Asked <br />
          Questions
        </p>

        <Fragment>
          <Accordion open={open === 1} onClick={() => handleOpen(1)} icon={false}>
            <AccordionHeader className='border-transparent cursor-pointer'>
              <div className='w-full font-inter'>
                <div className='flex justify-between items-start text-left'>
                  <p className='text-lg md:text-3xl font-bold'>How can I get a new device?</p>
                  {open === 1 ? <MinusIcon className='mt-2' /> : <PlusIcon className='stroke-orange-color' />}
                </div>
              </div>
            </AccordionHeader>

            <AccordionBody className='mt-10 pb-24 font-inter'>
              <p className='text-xl leading-8'>
                Bluelink and IOSiX, are compatible with pick-up trucks. Please note that if you have a PT30 device, you
                will need to upgrade because the hardware has been discontinued.
              </p>
            </AccordionBody>
          </Accordion>
          <hr />
          <Accordion open={open === 2} onClick={() => handleOpen(2)} icon={false}>
            <AccordionHeader className='font-inter pt-14'>
              <div className='w-full'>
                <div className='flex justify-between items-start text-left'>
                  <p className='text-lg w-11/12 md:text-3xl font-bold'>
                    What ELD manufacturer devices are compatible with pick-up trucks?
                  </p>
                  {open === 2 ? <MinusIcon className='mt-2' /> : <PlusIcon className='stroke-orange-color' />}
                </div>
              </div>
            </AccordionHeader>

            <AccordionBody className='mt-10 pb-24 font-inter'>
              <p className='text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non montes, in quis faucibus leo
                vulputate velit tincidunt. Nibh mauris quis sit et erat cursus. Habitasse lectus nec cursus phasellus
                elit curabitur felis cras. In lacus, nisi natoque ullamcorper viverra fermentum non. Nibh velit lacinia
                quisque massa lorem facilisis. Facilisis id quam sed in ut morbi orci aliquet. Aliquet mattis porttitor
                arcu non erat consectetur fringilla mattis habitasse. Dignissim arcu cras elit magna volutpat arcu
                tincidunt orci.
              </p>
            </AccordionBody>
          </Accordion>
          <hr />
          <Accordion open={open === 3} onClick={() => handleOpen(3)} icon={false}>
            <AccordionHeader className='font-inter pt-14'>
              <div className='w-full'>
                <div className='flex justify-between items-start text-left'>
                  <p className='text-lg md:text-3xl w-11/12 font-bold'>
                    What ELD hardware manufacturers are compatible with NEW Platforms?
                  </p>
                  {open === 3 ? <MinusIcon className='mt-2' /> : <PlusIcon className='stroke-orange-color' />}
                </div>
              </div>
            </AccordionHeader>

            <AccordionBody className='mt-10 pb-24 font-inter'>
              <p className='text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non montes, in quis faucibus leo
                vulputate velit tincidunt. Nibh mauris quis sit et erat cursus. Habitasse lectus nec cursus phasellus
                elit curabitur felis cras. In lacus, nisi natoque ullamcorper viverra fermentum non. Nibh velit lacinia
                quisque massa lorem facilisis. Facilisis id quam sed in ut morbi orci aliquet. Aliquet mattis porttitor
                arcu non erat consectetur fringilla mattis habitasse. Dignissim arcu cras elit magna volutpat arcu
                tincidunt orci.
              </p>
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </>
  )
}