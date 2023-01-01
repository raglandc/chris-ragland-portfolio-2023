import { useRef } from 'react'
import { useGLTF, Center, Text3D } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function SceneOne({ showStateHandler }) {
  const { nodes, materials } = useGLTF('/models/world-plane-pins.glb')
  const planeRef = useRef()
  const groupRef = useRef()
  const pinOneRef = useRef()
  const pinTwoRef = useRef()

  useFrame((_, delta) => {
    planeRef.current.rotation.x += delta * 0.01
    planeRef.current.rotation.z += -delta * 0.25
    groupRef.current.rotation.y += delta * 0.025
  })

  return (
    <>
      <Center
        top
        position={[0, 2.5, 0]}
      >
        <Text3D
          scale={0.25}
          font={'/fonts/helvetiker_regular.typeface.json'}
        >
          Click pins to learn more
        </Text3D>
      </Center>
      <group
        ref={groupRef}
        rotation={[Math.PI * 0.13, 0.41, 0]}
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
        <group
          ref={pinTwoRef}
          onClick={showStateHandler[1]}
          position={[-0.65, 1.15, 1.75]}
          rotation={[-2.97, -1.29, 2.16]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials['pin handle']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials['pin head']}
          />
        </group>
        <group
          ref={pinOneRef}
          onClick={showStateHandler[0]}
          position={[-0.61, 0.64, 2.01]}
          rotation={[-2.75, -1.29, 2.16]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['pin handle']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials['pin head']}
          />
        </group>
      </group>
    </>
  )
}
