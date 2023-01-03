import Menu from './Menu.jsx'
import Image from 'next/image.js'

export default function Navigation() {
  return (
    <nav className='fixed z-10 flex items-center justify-center w-screen mt-2 h-max'>
      <div className='flex items-center justify-between w-10/12 h-12 px-4 border rounded-lg md:w-8/12 lg:w-6/12 border-white/50 bg-white/20 backdrop-blur-sm'>
        <div className='w-2/4'>
          <Image
            src={'/icons/favicon.png'}
            alt='the letters c and r'
            width={24}
            height={24}
          />
        </div>

        <div className='flex justify-end w-2/4'>
          <Menu />
        </div>
      </div>
    </nav>
  )
}
