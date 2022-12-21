import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Portal({ children }) {
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector('#portal')
    setMounted(true)
  }, [])

  return mounted && ref.current
    ? createPortal(<div className='fixed top-0 left-0 z-20 w-full h-full bg-black/80'>{children}</div>, ref.current)
    : null
}
