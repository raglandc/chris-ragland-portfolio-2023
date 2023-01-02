import { useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()
  return (
    <div
      ref={mergeRefs([ref, localRef])}
      className='absolute top-0 left-0 w-screen h-full overflow-x-hidden text-slate-100 bg-slate-900 dom'
    >
      <Navigation />
      {children}
      <Footer />
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
