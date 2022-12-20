import ContactButton from '../util/ContactButton'

export default function Navigation() {
  return (
    <nav className='fixed z-10 flex items-center justify-between w-screen px-6 h-14 bg-white/20 backdrop-blur-lg drop-shadow-md'>
      <div className='w-2/4'>CR</div>

      <div className='flex flex-row justify-end w-2/4'>
        <ContactButton />
      </div>
    </nav>
  )
}
