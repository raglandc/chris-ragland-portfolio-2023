import { useState } from 'react'
import ContactButton from '../util/ContactButton'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [lightMode, setLightMode] = useState(true)

  const toggleLightMode = () => {
    setLightMode((prev) => !prev)
  }

  return (
    <nav className='z-10 flex items-center justify-around w-screen py-4 h-max'>
      <div className='order-1'>CR</div>
      <span className='order-2'>
        <ContactButton />
      </span>
      <span
        onClick={toggleLightMode}
        className='order-3 p-1 rounded-full hover:bg-indigo-300 hover:cursor-pointer hover:text-white'
      >
        {lightMode ? <MoonIcon className='w-5 h-5' /> : <SunIcon className='w-5 h-5' />}
      </span>
    </nav>
  )
}
