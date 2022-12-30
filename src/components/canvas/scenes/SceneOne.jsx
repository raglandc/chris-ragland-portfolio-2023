import { useRef } from 'react'
import * as THREE from 'three'
import { useGLTF, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

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
    <>
      <group rotation={[Math.PI * 0.13, 0.41, 0]}>
        <primitive
          object={world.scene}
          castShadow
          receiveShadow
        />
        {/* pins on the earth : Florida and Indiana */}
        <primitive
          onClick={showStateHandler}
          object={pinOne.scene}
        />
        <primitive object={pinTwo.scene} />

        <primitive
          castShadow
          ref={planeRef}
          object={plane.scene}
        />
      </group>
      {/* <ShadowCatcher /> */}
    </>
  )
}

// function ShadowCatcher() {
//   const { rx, py, rz } = useControls({
//     rx: {
//       value: -Math.PI / 2,
//       min: -Math.PI * 2,
//       max: Math.PI * 2,
//       step: 0.01,
//     },
//     py: {
//       value: -3.45,
//       min: -10,
//       max: 0,
//       step: 0.01,
//     },
//   })
//   return (
//     <mesh
//       rotation={[rx, 0, 0]}
//       position={[0, py, 0]}
//       receiveShadow
//     >
//       <planeGeometry args={[100, 100]} />
//       <meshStandardMaterial />
//     </mesh>
//   )
// }
