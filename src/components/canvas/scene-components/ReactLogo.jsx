import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
export default function ReactLogo(props) {
  // const { x, y, z } = useControls({
  //   x: { value: -1.8, min: -10, max: 10, step: 0.01 },
  //   y: { value: 0, min: -10, max: 10, step: 0.01 },
  //   z: { value: -1.0, min: -10, max: 10, step: 0.01 },
  // })
  const { scene } = useGLTF(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/react-logo/model.gltf',
  )
  return (
    <primitive
      position={[1.5, -3.4, -1.0]}
      object={scene}
      {...props}
    />
  )
}
