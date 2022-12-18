import { useRef } from 'react'
import { useGLTF, Text } from '@react-three/drei'
import { useFrame, Canvas } from '@react-three/fiber'
import { useControls } from 'leva'

export default function SceneOne() {
  const planeRef = useRef()

  // const { rx, ry } = useControls({ rx: 0.01, ry: 0.01 })

  useFrame((state, delta) => {
    planeRef.current.rotation.x += delta * 0.01
    planeRef.current.rotation.z += -delta * 0.25
  })

  const plane = useGLTF('./models/plane.glb')
  const world = useGLTF('./models/earth.glb')

  return (
    // <Canvas>
    //   <directionalLight
    //     intensity={0.3}
    //     position={[0, 1, 1]}
    //   />
    //   <ambientLight intensity={1} />
    <group>
      <primitive
        object={world.scene}
        rotation={[Math.PI * 0.13, 0.41, 0]}
      />

      <primitive
        ref={planeRef}
        object={plane.scene}
      />
    </group>
    // </Canvas>
  )
}