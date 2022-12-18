import { useState } from 'react'
import ContactButton from '../util/ContactButton'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [lightMode, setLightMode] = useState(true)

  const toggleLightMode = () => {
    setLightMode((prev) => !prev)
  }

  return (
    <nav className='z-10 flex items-center justify-between w-screen h-20 px-6'>
      <div className='order-1'>CR</div>

      <div className='flex flex-row order-2 w-max'>
        <div
          onClick={toggleLightMode}
          className='flex items-center mx-2 rounded-full hover:text-indigo-400 hover:cursor-pointer'
        >
          {lightMode ? <MoonIcon className='w-5 h-5' /> : <SunIcon className='w-5 h-5' />}
        </div>
        <ContactButton />
      </div>
    </nav>
  )
}
