import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import GlassCard from '@/components/util/GlassCard'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })
const SceneOne = dynamic(() => import('@/components/canvas/scenes/SceneOne.jsx'))
const SceneTwo = dynamic(() => import('@/components/canvas/scenes/SceneTwo.jsx'))
const SceneContainer = dynamic(() => import('@/components/canvas/SceneContainer.jsx'))
const Globe = dynamic(() => import('@/components/canvas/scenes/Globe.jsx'))

// Dom components go here
export default function Page(props) {
  return (
    <>
      <section className='relative order-1 h-screen bg-black col-span-full'>
        {/* <SceneContainer>
          <directionalLight
            intensity={0.3}
            position={[0, 1, 2]}
          />
          <color
            attach='background'
            args={['#111111']}
          />
          <Suspense fallback={null}>
            <Globe scale={1} />
          </Suspense>
        </SceneContainer> */}
        <div className='absolute top-0 left-0 flex flex-col justify-center w-full h-full text-center'>
          <div className='flex flex-col items-center justify-center w-full h-full font-bold text-white'>
            <h1 className='text-5xl'>
              Hi, my name is{' '}
              <span class='font-black text-transparent animate-text bg-gradient-to-r from-blue-500 via-fuchsia-600 to-fuchsia-600 bg-clip-text'>
                Chris Ragland
              </span>
            </h1>
          </div>
          <p className='my-6 text-white justify-self-end'>Scroll to learn more</p>
        </div>
      </section>

      {/*------------- SECTION 2 ------------ SECTION 2 ------------*/}

      <section className='relative order-2 h-screen col-span-full'>
        {/* <SceneTwo /> */}
        <div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full'>
          <h1 className='tracking-wider text-white'>SKILLS</h1>
          <GlassCard>Skills</GlassCard>
        </div>
      </section>

      {/*------------- SECTION 3 ------------ SECTION 3 ---------------*/}

      <section className='relative order-3 h-screen -z-10 col-span-full'>
        <SceneContainer>
          <color
            attach='background'
            args={['#171717']}
          />
        </SceneContainer>
        <div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full'>
          <h1 className='tracking-wider text-white'>WORK</h1>
          <GlassCard>work</GlassCard>
        </div>
      </section>

      <section className='relative order-4 h-screen -z-10 col-span-full'>
        {/* <SceneContainer>
          <mesh>
            <boxGeometry />
            <meshBasicMaterial />
          </mesh>
        </SceneContainer> */}
        <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
          <GlassCard>Ambulance</GlassCard>
        </div>
      </section>

      <section className='relative order-5 h-screen -z-10 col-span-full'>
        <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'></div>
        {/* <SceneContainer>
          <SceneOne />
        </SceneContainer> */}
      </section>
    </>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
// Page.canvas = (props) => <Logo scale={0.5} route='/blob' position-y={-1} />
// Page.canvas = (props) => <SceneOne />

export async function getStaticProps() {
  return { props: { title: 'Chris Ragland' } }
}
