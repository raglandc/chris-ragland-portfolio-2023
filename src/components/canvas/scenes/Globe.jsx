import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

export default function Globe({ ...props }) {
  const ref = useRef()
  // const { x, y, z } = useControls({
  //   x: { value: -1.8, min: -10, max: 10, step: 0.01 },
  //   y: { value: 0, min: -10, max: 10, step: 0.01 },
  //   z: { value: -1.0, min: -10, max: 10, step: 0.01 },
  // })

  const { scene } = useGLTF('./models/globe-v1.glb')

  return (
    <primitive
      {...props}
      ref={ref}
      object={scene}
    />
  )
}
