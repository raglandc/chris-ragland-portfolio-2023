import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import { useFrame } from '@react-three/fiber'

export default function Globe({ ...props }) {
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.025
  })

  const { scene } = useGLTF('./models/globe.glb')

  return (
    <group>
      <primitive
        {...props}
        position={[0, -1.25, 1.25]}
        rotation-x={Math.PI * 0.1}
        ref={ref}
        object={scene}
      />
    </group>
  )
}
