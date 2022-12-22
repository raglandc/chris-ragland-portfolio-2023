import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

export default function LandingScene() {
  // const { x, y, z } = useControls({
  //   x: { value: -1.8, min: -10, max: 10, step: 0.01 },
  //   y: { value: 0, min: -10, max: 10, step: 0.01 },
  //   z: { value: -1.0, min: -10, max: 10, step: 0.01 },
  // })

  const { scene } = useGLTF('./models/landing-scene.glb')

  return (
    <primitive
      position={[0, -1.9, -5]}
      rotation={[0, -Math.PI / 4, 0]}
      object={scene}
    />
  )
}
