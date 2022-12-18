import ContactButton from '../util/ContactButton'

export default function Navigation() {
  return (
    <nav className='z-10 flex items-center justify-between w-screen h-20 px-6'>
      <div className='w-2/4'>CR</div>

      <div className='flex flex-row justify-end w-2/4'>
        <ContactButton />
      </div>
    </nav>
  )
}
