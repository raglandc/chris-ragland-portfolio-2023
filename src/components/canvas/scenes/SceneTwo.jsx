import { useGLTF, Float } from '@react-three/drei'
import dynamic from 'next/dynamic'

const CoffeeCup = dynamic(() => import('@/components/canvas/scene-components/CoffeeCup.jsx'))

export default function SceneTwo(props) {
  return (
    <Float
      floatIntensity={0.01}
      speed={0.5}
    >
      <CoffeeCup />
    </Float>
  )
}
