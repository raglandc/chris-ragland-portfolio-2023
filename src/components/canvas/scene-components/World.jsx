import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function World() {
  const planeRef = useRef()
  const worldRef = useRef()

  useFrame((state, delta) => {
    planeRef.current.rotation.x += 0.01 * delta * 0.062
    planeRef.current.rotation.z += -Math.PI * delta * 0.062

    worldRef.current.rotation.y += delta * 0.0025
    worldRef.current.rotation.z += -Math.PI * delta * 0.0025
  })

  const plane = useGLTF('./models/plane.glb')
  const world = useGLTF('./models/earth.glb')

  return (
    <group>
      <primitive
        ref={worldRef}
        object={world.scene}
        rotation={[Math.PI * 0.1, 0, 0]}
      />

      <primitive
        ref={planeRef}
        object={plane.scene}
      />
    </group>
  )
}
