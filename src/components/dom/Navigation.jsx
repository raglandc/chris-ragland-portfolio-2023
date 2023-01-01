import Menu from './Menu.jsx'

export default function Navigation(props) {
  return (
    <nav className='fixed z-10 flex items-center justify-center w-screen mt-3 h-max'>
      <div className='flex items-center justify-between w-10/12 h-12 px-4 border rounded-lg md:w-8/12 lg:w-6/12 border-white/50 bg-white/20 backdrop-blur-sm'>
        <div className='w-2/4'>CR</div>

        <div className='flex justify-end w-2/4'>
          <Menu />
        </div>
      </div>
    </nav>
  )
}
