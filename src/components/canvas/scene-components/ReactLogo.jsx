import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Detailed, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export default function ReactLogo({ index, z, speed }) {
  const ref = useRef()
  const { viewport, camera } = useThree()
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z])
  const { nodes, materials } = useGLTF('./models/react-logo.glb')

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height * 2),
  })

  // useFrame executes 60 times per second
  useFrame((state, dt) => {
    ref.current.position.set(index === 0 ? 0 : data.x * width, (data.y += dt * 2), -z)
    // If they're too far up, set them back to the bottom
    if (data.y > height * (index === 0 ? 4 : 1)) data.y = -(height * (index === 0 ? 4 : 1))
  })

  return (
    <mesh
      ref={ref}
      geometry={nodes.reactLogo.geometry}
      material={materials.skin}
      rotation={[Math.PI / 2, 0, 0]}
      material-emissive={'#111111'}
    />
  )
}
