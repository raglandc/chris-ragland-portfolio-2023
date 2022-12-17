import dynamic from 'next/dynamic'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })
const World = dynamic(() => import('@/components/canvas/scene-components/World.jsx'))

// Dom components go here
export default function Page(props) {
  return <div className='absolute px-1 py-2 bg-black left-50 top-50 h-max w-max'>{props.title}</div>
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
// Page.canvas = (props) => <Logo scale={0.5} route='/blob' position-y={-1} />
Page.canvas = (props) => <World />

export async function getStaticProps() {
  return { props: { title: 'Chris Ragland' } }
}
