import { useRef } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function SceneOne({ showState, showStateHandler }) {
  const planeRef = useRef()

  useFrame((_, delta) => {
    planeRef.current.rotation.x += delta * 0.01
    planeRef.current.rotation.z += -delta * 0.25
  })

  const plane = useGLTF('/models/plane.glb')
  const world = useGLTF('/models/earth.glb')
  const pinOne = useGLTF('/models/pin-one.glb')
  const pinTwo = useGLTF('/models/pin-two.glb')

  return (
    <group rotation={[Math.PI * 0.13, 0.41, 0]}>
      <primitive object={world.scene} />
      {/* pins on the earth : Florida and Indiana */}
      <primitive
        onClick={showStateHandler}
        object={pinOne.scene}
      />
      <primitive object={pinTwo.scene} />

      <primitive
        ref={planeRef}
        object={plane.scene}
      />
    </group>
  )
}
