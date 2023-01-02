import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import SkillList from '@/components/dom/SkillList'
import Scroll from '@/components/dom/Scroll'
import WorkCards from '@/components/dom/WorkCards'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })
const SceneContainer = dynamic(() => import('@/components/canvas/SceneContainer.jsx'))

// Dom components go here
export default function Page(props) {
  const [showWorld, setShowWorld] = useState(false)
  return (
    <>
      <div className='absolute top-0 left-0 order-first w-full h-screen bg-gradient-to-b from-black' />
      <section className='order-1 min-h-screen col-span-full lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10'>
        {/* The div below is for the space that would be present if nav was not fixed */}
        <div className='flex flex-col items-center justify-center w-full h-full'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
            className='flex flex-col items-center justify-center w-full h-full font-bold sm:text-center sm:translate-y-20 translate-y-4'
          >
            <h1 className='w-10/12 text-4xl sm:text-5xl'>Hi,</h1>
            <h1 className='w-10/12 text-4xl sm:text-5xl '> my name is </h1>
            <h1 className='w-10/12 text-5xl font-black text-transparent sm:text-6xl animate-text bg-gradient-to-r from-blue-600 via-fuchsia-500 to-fuchsia-600 bg-clip-text'>
              Chris
            </h1>
            <h1 className='w-10/12 pb-1 text-5xl font-black text-transparent sm:text-6xl animate-text bg-gradient-to-l from-blue-600 via-fuchsia-500 to-fuchsia-600 bg-clip-text'>
              Ragland
            </h1>
            <h2 className='w-10/12 ml-3 text-4xl mt-9 sm:text-5xl text-slate-400'>
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

      <section className='relative flex flex-col justify-around order-2 h-max col-span-full md:col-start-2 md:col-end-12 2xl:col-start-3 2xl:col-end-11'>
        <SkillList />
      </section>

      {/*------------- SECTION 3 ------------ SECTION 3 ---------------*/}

      <section className='flex flex-col items-center order-3 px-2 py-10 mt-20 bg-black/20 h-max col-span-full'>
        <WorkCards />
      </section>

      {/*------------- SECTION 4 ------------ SECTION 4 ---------------*/}
      {/* currently wrapping up project, may add section later on */}

      {/* <section className='order-4 h-screen col-span-full'>
        <div className='flex items-center justify-center w-full h-full '>
          <h1 className='w-11/12 text-2xl'>
            <span className='font-bold text-left text-transparent animate-text bg-gradient-to-r via-blue-500 from-fuchsia-600 to-blue-500 bg-clip-text'>
              ...and play harder{' '}
            </span>
            🎸
          </h1>
        </div>
      </section> */}

      {/*------------- SECTION 5 ------------ SECTION 5 ---------------*/}

      <section className='flex flex-col items-center order-4 min-h-screen mt-20 text-center col-span-full md:col-start-2 md:col-end-12 xl:col-start-3 xl:col-end-11'>
        <h1 className='w-11/12 mb-5 text-2xl text-left'>
          <span className='font-bold text-transparent animate-text bg-gradient-to-r via-blue-500 from-fuchsia-600 to-blue-500 bg-clip-text'>
            ...and play harder{' '}
          </span>
          🎸
        </h1>
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
            <SceneContainer />
          </div>
        )}
      </section>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Chris Ragland' } }
}
