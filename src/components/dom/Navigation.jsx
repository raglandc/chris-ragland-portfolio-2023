import ContactButton from './ContactButton'

export default function Navigation(props) {
  return (
    <nav className='fixed z-10 flex items-center justify-between w-screen px-6 shadow-md h-14 bg-white/50 backdrop-blur-lg drop-shadow-md'>
      <div className='w-2/4'>CR</div>

      <div className='flex flex-row justify-end w-2/4'>
        <ContactButton layoutRef={props.layoutRef} />
      </div>
    </nav>
  )
}
