import Contact from './Contact'

export default function Navigation(props) {
  return (
    <nav className='fixed z-10 flex justify-center w-screen p-4 items center h-max'>
      <div className='flex items-center justify-between w-3/4 px-4 border rounded-lg shadow-md border-white/50 bg-white/20 backdrop-blur-lg drop-shadow-md h-14'>
        <div className='w-2/4'>CR</div>

        <div className='flex flex-row justify-end w-2/4'>
          <Contact />
        </div>
      </div>
    </nav>
  )
}
