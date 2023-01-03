import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Preload, useProgress, Html } from '@react-three/drei'
import PortalBackdrop from '@/components/dom/util/PortalBackdrop'
import PortalOverlay from '../dom/util/PortalOverlay'
import { VscClose } from 'react-icons/vsc'

const SceneOne = dynamic(() => import('@/components/canvas/scenes/SceneOne.jsx'))

export default function SceneContainer() {
  const [showIndiana, setShowIndiana] = useState(false)
  const [showFlorida, setShowFlorida] = useState(false)

  const showIndianaHandler = () => {
    setShowIndiana((prev) => !prev)
  }

  const showFloridaHandler = () => {
    setShowFlorida((prev) => !prev)
  }

  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 8], fov: 45 }}
        className='absolute top-0 left-0 z-10 w-full h-full'
      >
        <OrbitControls
          maxPolarAngle={Math.PI}
          minPolarAngle={-Math.PI}
          enableZoom={false}
        />
        <Environment preset='city' />
        <Suspense fallback={<Loader />}>
          <SceneOne showStateHandler={[showFloridaHandler, showIndianaHandler]} />
        </Suspense>
        <Preload all />
      </Canvas>
      {showIndiana && !showFlorida ? (
        <>
          <PortalBackdrop onClick={showIndianaHandler} />
          <PinInfo
            closeHandler={showIndianaHandler}
            title={stateInformation[0].stateTitle}
            description={stateInformation[0].description}
          />
        </>
      ) : null}
      {showFlorida && !showIndiana ? (
        <>
          <PortalBackdrop onClick={showFloridaHandler} />
          <PinInfo
            closeHandler={showFloridaHandler}
            title={stateInformation[1].stateTitle}
            description={stateInformation[1].description}
          />
        </>
      ) : null}
    </>
  )
}

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

function PinInfo({ title, description, img, closeHandler }) {
  return (
    <PortalOverlay className='fixed z-30 flex justify-center max-h-screen max-w-screen -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 h-max text-slate-100'>
      <div className='flex flex-col items-center py-3 my-4 overflow-y-scroll rounded-lg sm:overflow-hidden w-80 bg-slate-800'>
        <div className='flex items-center justify-between w-full px-6 py-3'>
          <h1 className='w-11/12 text-4xl font-bold'>{title}</h1>
          <VscClose
            className='p-1 cursor-pointer w-max h-max hover:rounded-full hover:bg-slate-900/30'
            onClick={closeHandler}
          />
        </div>
        <div className='flex flex-col items-center w-10/12'>
          <p className='py-4 text-slate-300'>{description}</p>
        </div>
      </div>
    </PortalOverlay>
  )
}

const stateInformation = [
  {
    stateTitle: 'Indiana',
    description:
      'Chris was born in South Bend, Indiana, but he spent most of his early years in Lafayette, Indiana. Lafayette is where Chris would graduate highschool and begin his experience as a young EMT. Chris worked on the ambulance for about six months before he moved to Florida in the fall of 2016.',
  },
  {
    stateTitle: 'Florida',
    description:
      'Shortly after arriving to Florida, Chris continued his journey as an EMT. However, Chris began to think that maybe he did not want a career in medicine. It was at this point he decided to give coding a chance and signed up for a web development course. After completing the course, Chris knew what he wanted to study. He had to take a few extra classes to change his major but now is currently majoring in computer science at the University of South Florida in Tampa (go Bulls 🐂)',
  },
]
