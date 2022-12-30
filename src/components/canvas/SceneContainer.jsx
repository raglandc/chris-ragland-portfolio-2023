import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Preload, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
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
        shadows
        camera={{ position: [0, 1.5, 8], fov: 45 }}
        className='absolute top-0 left-0 z-10 w-full h-full'
      >
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
        <Environment preset='city' />
        <AccumulativeShadows
          temporal
          frames={100}
          color='orange'
          colorBlend={2}
          toneMapped={true}
          alphaTest={0.9}
          opacity={2}
          scale={12}
        >
          <RandomizedLight
            amount={8}
            radius={4}
            ambient={0.5}
            intensity={1}
            position={[5, 5, -10]}
            bias={0.001}
          />
        </AccumulativeShadows>
        {/* <directionalLight
          intensity={1}
          castShadow
        /> */}
        <SceneOne showStateHandler={showStateHandler} />
        <Preload all />
      </Canvas>
      {showClicked && <PortalBackdrop onClick={showStateHandler} />}
    </>
  )
}
