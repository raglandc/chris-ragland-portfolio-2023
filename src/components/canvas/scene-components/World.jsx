import { useGLTF } from '@react-three/drei'

export default function World() {
  const world = useGLTF('./models/earth.glb')
  const plane = useGLTF('')

  return (
    <primitive
      object={world.scene}
      scale={1.13}
      rotation={[Math.PI * 0.1, 0, 0]}
    />
  )
}
