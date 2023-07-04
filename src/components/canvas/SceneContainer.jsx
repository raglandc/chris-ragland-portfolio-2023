import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Preload, useProgress, Html } from '@react-three/drei'

const SceneOne = dynamic(() => import('@/components/canvas/scenes/SceneOne.jsx'))

export default function SceneContainer() {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 5], fov: 27 }}
      className='absolute top-0 left-0 z-10 w-full h-full'
    >
      <Environment
        path='/hdri/'
        files='canary_wharf_1k.hdr'
      />
      <Suspense fallback={<Loader />}>
        <SceneOne />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}
