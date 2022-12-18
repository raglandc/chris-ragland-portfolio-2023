import ContactButton from '../util/ContactButton'

export default function Navigation() {
  return (
    <nav className='z-10 flex items-center justify-around w-screen py-4 h-max'>
      <div className='order-1'>CR</div>
      <ContactButton />
      <div className='order-3'>D</div>
    </nav>
  )
}
