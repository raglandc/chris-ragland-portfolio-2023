import { useRef, useEffect } from 'react'
import { useGLTF, Html, Stars } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

export default function SceneOne({ showStateHandler }) {
  const planeRef = useRef(null)

  useFrame((_, delta) => {
    planeRef.current.rotation.x += delta * 0.01
    planeRef.current.rotation.z += -delta * 0.25
  })

  const plane = useGLTF('/models/plane.glb')
  const world = useGLTF('/models/earth.glb')
  const pinOne = useGLTF('/models/pin-one.glb')
  const pinTwo = useGLTF('/models/pin-two.glb')

  console.log(pinTwo.scene.position)
  console.log(pinOne.scene.position)

  return (
    <>
      <group rotation={[Math.PI * 0.13, 0.41, 0]}>
        {/* <Stars
          count={1618}
          radius={100}
        /> */}
        <primitive
          object={world.scene}
          castShadow
          receiveShadow
        />
        {/* pins on the earth : Florida and Indiana */}
        <primitive
          onClick={showStateHandler[0]}
          object={pinOne.scene}
        />

        <primitive
          onClick={showStateHandler[1]}
          object={pinTwo.scene}
        />

        <primitive
          castShadow
          ref={planeRef}
          object={plane.scene}
        />
      </group>
    </>
  )
}
