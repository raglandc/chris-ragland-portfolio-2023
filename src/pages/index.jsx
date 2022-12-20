import dynamic from 'next/dynamic'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })
const SceneOne = dynamic(() => import('@/components/canvas/scene-components/SceneOne.jsx'))
const Scene = dynamic(() => import('@/components/canvas/Scene.jsx'))

// Dom components go here
export default function Page(props) {
  return (
    <>
      <section className='relative order-1 h-screen col-span-full'>
        <Scene>
          <SceneOne />
        </Scene>
        <div className='absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full'>
          <h1>Chris Ragland</h1>
        </div>
      </section>
      <section className='relative order-2 h-screen col-span-full'>
        <Scene>
          <mesh>
            <boxGeometry />
            <meshNormalMaterial color='red' />
          </mesh>
        </Scene>
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
