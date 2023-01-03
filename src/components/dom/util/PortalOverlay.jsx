import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// Styles will need to still be provided to the component as props
// an example class is as follows (using tailwind.css)
// ex: className='fixed z-30 w-max -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 h-max'

//the class centers the content without effecting the backdrop portion

export default function PortalOverlay({ children, ...props }) {
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector('#portal-root')
    setMounted(true)
  }, [])

  return mounted && ref.current ? createPortal(<div {...props}>{children}</div>, ref.current) : null
}
