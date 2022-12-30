import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function SceneContainer({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas
      {...props}
      className='absolute top-0 left-0 z-10 w-full h-full'
    >
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight intensity={1} />
      {children}
      <Preload all />
      {/* <Perf position='top-left' /> */}
    </Canvas>
  )
}
