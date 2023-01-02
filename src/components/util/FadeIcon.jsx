import { useRef, useEffect } from 'react'
import Image from 'next/image'

export default function FadeIcon({
  fadeTimeNumber = 1000,
  iconUrlString,
  altString,
  width = 200,
  height = 200,
  ...props
}) {
  const ref = useRef()

  function clearTimers(...timerNames) {
    for (let i = 0; i < timerNames.length; i++) clearTimeout(timerNames[i])
  }

  useEffect(() => {
    let timeout
    let hiddenTimeout
    timeout = setTimeout(() => {
      ref.current.classList.add('opacity-0')
      hiddenTimeout = setTimeout(() => {
        ref.current.classList.add('hidden')
      }, fadeTimeNumber / 2)
    }, fadeTimeNumber)

    return () => {
      clearTimers([timeout, hiddenTimeout])
    }
  })

  return (
    <div
      ref={ref}
      {...props}
    >
      <Image
        src={iconUrlString}
        alt={altString}
        width={width}
        height={height}
      />
    </div>
  )
}
