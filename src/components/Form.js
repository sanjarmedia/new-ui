import { useState } from 'react'
import { NextIcon } from '../icons'

export function Form() {
  const [state, setState] = useState('')

  function onInputChange(event) {
    const value = event.target.value
    setState(value)
  }

  return (
    <div
      className='relative z-50 m-auto rounded-full border border-gray-200 bg-gray-100
      2xl:w-1/4 xl:w-1/3 lg:w-1/3 md:w-1/2 w-10/12 flex justify-between p-1'
    >
      <input
        type='email'
        className='bg-gray-100 rounded-full mr-2 w-4/5 border-none'
        placeholder='example@mail.com'
        value={state}
        onChange={onInputChange}
      />

      <button
        className='bg-primary rounded-full flex justify-between items-center text-white h-12 px-4 text-sm'
        // onClick={onSendForm}
      >
        <span>Remind&#160;me</span>
        &#160;&#160;&#160;
        <NextIcon />
      </button>
    </div>
  )
}
