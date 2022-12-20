import { useControls } from 'leva'
import { useGLTF } from '@react-three/drei'

export default function CoffeeCup(props) {
  const { x, y, z } = useControls({
    x: { value: -1.8, min: -10, max: 10, step: 0.01 },
    y: { value: 0, min: -10, max: 10, step: 0.01 },
    z: { value: -1.0, min: -10, max: 10, step: 0.01 },
  })

  const { scene } = useGLTF(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/spilling-coffee/model.gltf',
  )
  return (
    <primitive
      rotation={[0, -0.6, -0.25]}
      position={[-1.5, 0, -1.0]}
      object={scene}
      {...props}
    />
  )
}
