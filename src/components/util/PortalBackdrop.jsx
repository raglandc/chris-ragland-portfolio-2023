import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function PortalBackdrop({ ...props }) {
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.getElementById('backdrop-root')
    setMounted(true)
  }, [])

  return mounted && ref.current
    ? createPortal(
        <div
          className='fixed top-0 left-0 w-full h-full bg-black/60'
          {...props}
        />,
        ref.current,
      )
    : null
}
