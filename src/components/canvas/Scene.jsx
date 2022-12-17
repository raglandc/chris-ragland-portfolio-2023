import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <Perf position='bottom-left' />
    </Canvas>
  )
}
