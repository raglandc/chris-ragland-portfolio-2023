import { useRef, useState } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import Modal from '@/components/util/Modal'

export default function SceneOne(props) {
  const planeRef = useRef()
  const [showIndiana, setShowIndiana] = useState(false)
  // const { rx, ry } = useControls({ rx: 0.01, ry: 0.01 })

  useFrame((_, delta) => {
    planeRef.current.rotation.x += delta * 0.01
    planeRef.current.rotation.z += -delta * 0.25
  })

  const plane = useGLTF('./models/plane.glb')
  const world = useGLTF('./models/earth.glb')

  return (
    <group>
      <primitive
        object={world.scene}
        rotation={[Math.PI * 0.13, 0.41, 0]}
      >
        {showIndiana ? (
          <Html
            center
            position={[
              world.scene.children[0].position.x,
              world.scene.children[0].position.y,
              world.scene.children[0].position.z,
            ]}
          >
            <div
              onClick={() => setShowIndiana((prev) => !prev)}
              className='rounded-full opacity-75 bg-primary w-7 h-7 animate-ping-slow'
            />
          </Html>
        ) : (
          <Html fullscreen>
            <Modal setShowIndiana={setShowIndiana} />
          </Html>
        )}
        <Html
          center
          position={[
            world.scene.children[1].position.x,
            world.scene.children[1].position.y,
            world.scene.children[1].position.z,
          ]}
        >
          <div className='rounded-full opacity-75 bg-primary w-7 h-7 animate-ping-slow' />
        </Html>
      </primitive>

      <primitive
        ref={planeRef}
        object={plane.scene}
      />
    </group>
  )
}
