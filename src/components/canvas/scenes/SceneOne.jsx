import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function SceneOne() {
  const { nodes, materials } = useGLTF('/models/world-plane-pins.glb')
  const planeRef = useRef()
  const groupRef = useRef()

  useFrame((_, delta) => {
    planeRef.current.rotation.x += delta * 0.01
    planeRef.current.rotation.z += -delta * 0.25
    groupRef.current.rotation.y += delta * 0.025
  })

  return (
    <>
      <group
        ref={groupRef}
        rotation={[Math.PI * 0.13, 0.41, 0]}
        position={[0, -2, 0]}
        dispose={null}
      >
        <mesh
          ref={planeRef}
          castShadow
          receiveShadow
          geometry={nodes.plane.geometry}
          material={materials['plane-skin']}
          rotation={[0.25, 0.19, 0.31]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials['Material.002']}
          scale={1.07}
        />
      </group>
    </>
  )
}
