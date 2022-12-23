import dynamic from 'next/dynamic'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { Suspense } from 'react'

const ReactLogo = dynamic(() => import('@/components/canvas/scene-components/ReactLogo.jsx'))
const SceneContainer = dynamic(() => import('@/components/canvas/SceneContainer.jsx'))

export default function SceneTwo({
  speed = 1,
  count = 80,
  depth = 80,
  easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
}) {
  return (
    <SceneContainer
      // gl={{ antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 10], fov: 35, near: 0.01, far: depth + 15 }}
    >
      <color
        attach='background'
        args={['#171717']}
      />
      <spotLight
        position={[10, 20, 10]}
        intensity={3}
      />
      <Suspense>
        {Array.from({ length: count }, (_, i) => (
          <ReactLogo
            key={i}
            index={i}
            z={Math.round(easing(i / count) * depth)}
            speed={speed}
          />
        ))}
        <EffectComposer multisampling={0}>
          <DepthOfField
            target={[0, 0, depth / 2]}
            focalLength={0.5}
            bokehScale={11}
            height={700}
          />
        </EffectComposer>
      </Suspense>
    </SceneContainer>
  )
}
