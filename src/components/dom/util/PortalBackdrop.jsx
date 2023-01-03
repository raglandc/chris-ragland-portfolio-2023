import { useEffect, useState, useRef } from 'react'
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
          {...props}
          className='fixed top-0 left-0 z-20 w-full h-full bg-gradient-to-b from-black/70 to-slate-900'
        />,
        ref.current,
      )
    : null
}
