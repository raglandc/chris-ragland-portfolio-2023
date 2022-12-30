import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import PortalBackdrop from '@/components/util/PortalBackdrop'
import SceneOne from './scenes/SceneOne'

export default function SceneContainer({ children, ...props }) {
  const [showClicked, setShowClicked] = useState(false)
  const showStateHandler = () => {
    console.log('clicked')
    setShowClicked((prev) => !prev)
  }
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <>
      <Canvas
        {...props}
        className='absolute top-0 left-0 z-10 w-full h-full'
      >
        <OrbitControls />
        <ambientLight intensity={1} />
        <directionalLight intensity={1} />
        <SceneOne showStateHandler={showStateHandler} />
        <Preload all />
      </Canvas>
      {showClicked && <PortalBackdrop onClick={showStateHandler} />}
    </>
  )
}
