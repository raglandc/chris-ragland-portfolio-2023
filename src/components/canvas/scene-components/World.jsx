import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function World() {
  const planeRef = useRef()

  useFrame((state, delta) => {
    planeRef.current.rotation.x += delta * 0.01
    planeRef.current.rotation.z += -delta * 0.25
  })

  const plane = useGLTF('./models/plane.glb')
  const world = useGLTF('./models/earth.glb')

  return (
    <group>
      <primitive
        object={world.scene}
        rotation={[Math.PI * 0.1, 0.25, 0]}
      />

      <primitive
        ref={planeRef}
        object={plane.scene}
      />
    </group>
  )
}
