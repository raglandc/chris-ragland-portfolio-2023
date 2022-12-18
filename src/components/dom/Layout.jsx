import { useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'
import Navigation from './Navigation'

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()
  return (
    <div
      ref={mergeRefs([ref, localRef])}
      className='absolute top-0 left-0 w-screen h-screen overflow-x-hidden grid grid-cols-12 gap-x-2 dom text-neutral-900'
    >
      <Navigation />
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
