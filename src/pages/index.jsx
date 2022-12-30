import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { Suspense } from 'react'
import SkillList from '@/components/dom/SkillList'
import Scroll from '@/components/dom/Scroll'
import WorkSlideShow from '@/components/dom/WorkSlideShow'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })
const SceneOne = dynamic(() => import('@/components/canvas/scenes/SceneOne.jsx'))
const SceneContainer = dynamic(() => import('@/components/canvas/SceneContainer.jsx'))

// Dom components go here
export default function Page(props) {
  const [showWorld, setShowWorld] = useState(false)
  return (
    <>
      <section className='order-1 min-h-screen col-span-full'>
        {/* The div below is for the space that would be present if nav was not fixed */}
        <div className='flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-black'>
          <div className='w-full h-12 mt-4 transparent' />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
            className='flex flex-col items-center justify-center w-full h-full font-bold translate-y-4'
          >
            <h1 className='w-10/12 text-4xl'>Hi,</h1>
            <h1 className='w-10/12 text-4xl'> my name is </h1>
            <h1 className='w-10/12 text-5xl font-black text-transparent animate-text bg-gradient-to-r from-blue-600 via-fuchsia-500 to-fuchsia-600 bg-clip-text'>
              Chris
            </h1>
            <h1 className='w-10/12 pb-1 text-5xl font-black text-transparent animate-text bg-gradient-to-l from-blue-600 via-fuchsia-500 to-fuchsia-600 bg-clip-text'>
              Ragland
            </h1>
            <h2 className='w-10/12 mt-8 ml-3 text-4xl text-slate-400'>
              <Typewriter
                options={{
                  strings: ['student.', 'developer.', "coffee ❤️'er."],
                  autoStart: true,
                  loop: true,
                  cursor: '_',
                }}
              />
            </h2>
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          >
            <Image
              src='/img/banner.png'
              alt='coffee cup, laptop, pencil'
              width={1024}
              height={1024}
            />
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 3.0, ease: 'easeInOut' }}
          >
            <Scroll />
          </motion.span>
        </div>
      </section>

      {/*------------- SECTION 2 ------------ SECTION 2 ------------*/}

      <section className='flex flex-col justify-around order-2 h-max col-span-full'>
        <SkillList />
      </section>

      {/*------------- SECTION 3 ------------ SECTION 3 ---------------*/}

      <section className='order-3 mt-20 h-max col-span-full'>
        <WorkSlideShow />
      </section>

      {/*------------- SECTION 4 ------------ SECTION 4 ---------------*/}
      <section className='order-4 h-screen col-span-full'>
        <div className='flex items-center justify-center w-full h-full '>
          <h1 className='w-11/12 text-2xl'>
            <span className='font-bold text-left text-transparent animate-text bg-gradient-to-r via-blue-500 from-fuchsia-600 to-blue-500 bg-clip-text'>
              ...and play harder{' '}
            </span>
            🎸
          </h1>
        </div>
      </section>

      {/*------------- SECTION 5 ------------ SECTION 5 ---------------*/}

      <section className='flex flex-col items-center order-5 min-h-screen text-center col-span-full'>
        <div className='w-10/12'>
          <p>
            As you can see from recent projects, Chris loves working with WebGL and interactive 3D web experiences. The
            problem is these experiences, depending on your computer device, can be slow or &apos;laggy&apos; for a lack
            of better words. Chris wants for everyone to have a good experience.
          </p>
          <p>
            If you think your computer or cell phone is up to it, go ahead and click the button below and learn more
            about Chris&apos; world. 🌎
          </p>
        </div>
        <button
          className='px-6 py-3 mt-4 border rounded-lg cursor-pointer w-max text-slate-300 hover:bg-slate-700 hover:text-slate-100 bg-slate-800'
          onClick={() => setShowWorld((prev) => !prev)}
        >
          {showWorld ? 'Hide' : 'Show'} 3D World
        </button>
        {showWorld && (
          <div className='relative w-full h-full'>
            <SceneContainer>
              <Suspense fallback={null}>
                <SceneOne />
              </Suspense>
            </SceneContainer>
          </div>
        )}
      </section>
    </>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
// Page.canvas = (props) => <Logo scale={0.5} route='/blob' position-y={-1} />
Page.canvas = (props) => <SceneOne />

export async function getStaticProps() {
  return { props: { title: 'Chris Ragland' } }
}
