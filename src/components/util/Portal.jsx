import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Portal({ children, ...props }) {
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector('#portal')
    setMounted(true)
  }, [])

  return mounted && ref.current ? createPortal(<div {...props}>{children}</div>, ref.current) : null
}

function PortalOverlay({ children }) {
  return <span>{children}</span>
}
