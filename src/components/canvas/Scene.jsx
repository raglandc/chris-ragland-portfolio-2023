import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>
      <OrbitControls />
      <directionalLight
        intensity={0.75}
        rotation={[Math.PI, 0, 0]}
      />
      <ambientLight intensity={1} />
      {children}
      <Preload all />
      <Perf position='bottom-left' />
    </Canvas>
  )
}
