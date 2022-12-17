import { useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'
import Navigation from './Navigation'

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()
  return (
    <div
      ref={mergeRefs([ref, localRef])}
      className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden bg-white dom text-neutral-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'
    >
      <Navigation />
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
