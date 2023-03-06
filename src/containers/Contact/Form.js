import { equals, prop } from 'ramda'
import { useState } from 'react'
import { NextIcon } from '../../icons'
import { useForm } from 'react-hook-form'
import { telegram } from '../../telegram'
import { InputField } from '../../components/InputFiled'
import { Notification } from '../../components/Notification';

export function Form() {
  const [state, setState] = useState(false)
  const [department, setDepartment] = useState('general')

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm()

  const activeButtonClassName = ' bg-primary text-white font-medium duration-300'
  const noActiveButtonClassName = ' bg-background-color text-secondary duration-300'
  const buttonClassName = 'z-10 px-4 py-2 rounded-3xl hover:bg-primary hover:text-white duration-300'

  function onSubmit(value) {
    const data = `
    - Date: ${new Date().toString()} %0A
    - Department: ${department} %0A 
    - Name: ${prop('name', value)} %0A 
    - Email: ${prop('email', value)} %0A 
    - Subject: ${prop('subject', value)} %0A 
    - Message: ${prop('message', value)}
    `
    // .then()

    telegram(data)
      .then(data => {
        setDepartment({
          department: 'general',
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      })
      .then(data => {
        setState(true)
      })

    setDepartment('general')
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='px-5 md:px-36 mt-24'>
          <div className='px-0 md:px-12 xl:px-64'>
            <p>Department</p>

            <div className='relative z-10 flex justify-start items-center overflow-x-auto'>
              <div className='whitespace-nowrap py-5 hover:scroll-hidden'>
                <button
                  className={`${
                    equals(department, 'general') ? activeButtonClassName : noActiveButtonClassName
                  } ${buttonClassName}`}
                  onClick={event => {
                    event.preventDefault()

                    setDepartment('general')
                  }}
                >
                  General
                </button>

                <button
                  className={`${equals(department, 'sales team') ? activeButtonClassName : noActiveButtonClassName} ${
                    buttonClassName + ' ml-3'
                  }`}
                  onClick={event => {
                    event.preventDefault()

                    setDepartment('sales team')
                  }}
                >
                  Sales team
                </button>

                <button
                  className={`${equals(department, 'support team') ? activeButtonClassName : noActiveButtonClassName} ${
                    buttonClassName + ' ml-3'
                  }`}
                  onClick={event => {
                    event.preventDefault()

                    setDepartment('support team')
                  }}
                >
                  Support team
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='relative z-10 px-5 md:px-36 mt-10'>
          <div className='px-0 md:px-12 xl:px-64 md:flex justify-between items-center'>
            <div className='w-full mr-5'>
              <label>Name</label>

              <InputField
                rest
                register={register}
                control={control}
                rules={{required: true}}
                error={prop('name', errors)}
                name='name'
                placeholder='Jhon Doe'
              />
            </div>

            <div className='w-full md:ml-5 mt-5 md:mt-0'>
              <label>Email *</label>

              <InputField
                register={register}
                control={control}
                rules={{required: true}}
                error={prop('email', errors)}
                name='email'
                placeholder='exemple@mail.com'
              />
            </div>
          </div>

          <div className='px-0 md:px-12 xl:px-64 mt-5 md:mt-10'>
            <div className='w-full'>
              <label>Subject *</label>

              <InputField
                register={register}
                control={control}
                rules={{required: true}}
                error={prop('subject', errors)}
                name='subject'
                placeholder='A Subject'
              />
            </div>

            <div className='w-full mt-5 md:mt-10'>
              <label>Message *</label>

              <textarea
                name='message'
                {...register('message')}
                className='mt-2 py-3 px-4 w-full h-32 border border-input-border-color rounded-2xl bg-background-color
              placeholder:text-placeholder-color'
                placeholder='Your message ...'
                required
              />
            </div>

            <div className='w-full flex items-center justify-center mt-10'>
              <input
                id='default-checkbox'
                type='checkbox'
                value=''
                required
                className='w-5 h-5 text-blue-600 rounded-md border-gray-300 focus:ring-blue-500
              dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />

              <p className='ml-3 text-sm'>I agree to the Terms and Privacy.</p>
            </div>

            <div className='w-full flex items-center justify-center mt-10'>
              <button
                className='py-2 px-5 flex items-center bg-primary hover:bg-hover text-white rounded-3xl'
                onClick={handleSubmit(onSubmit)}
              >
                Send your message
                <NextIcon className='stroke-white ml-3'/>
              </button>
            </div>
          </div>
        </div>
      </form>
      <Notification open={state} close={() => setState(false)} />
    </>
  )
}
