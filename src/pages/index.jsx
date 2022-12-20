import dynamic from 'next/dynamic'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })
const SceneOne = dynamic(() => import('@/components/canvas/scenes/SceneOne.jsx'))
const SceneTwo = dynamic(() => import('@/components/canvas/scenes/SceneTwo.jsx'))
const SceneContainer = dynamic(() => import('@/components/canvas/SceneContainer.jsx'))

// Dom components go here
export default function Page(props) {
  return (
    <>
      <section className='relative order-1 h-screen col-span-full'>
        <SceneContainer>
          <SceneOne />
        </SceneContainer>
        <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
          <h1>Chris Ragland</h1>
        </div>
      </section>
      <section className='relative order-2 h-screen col-span-full'>
        <SceneContainer>
          <SceneTwo />
        </SceneContainer>
        <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
          <div className='w-3/4 bg-white/20 backdrop-blur-lg drop-shadow-md h-1/4'></div>
        </div>
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
