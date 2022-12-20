import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function SceneContainer({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas
      eventSource={props.ref}
      {...props}
      className='absolute top-0 left-0 w-full h-full -z-10'
    >
      {/* <OrbitControls /> */}
      <directionalLight
        intensity={0.3}
        position={[0, 1, 1]}
      />
      <ambientLight intensity={1} />
      {children}
      <Preload all />
      {/* <Perf position='top-left' /> */}
    </Canvas>
  )
}
