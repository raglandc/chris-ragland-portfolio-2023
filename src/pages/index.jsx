import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import SkillList from '@/components/dom/SkillList'
import WorkCards from '@/components/dom/WorkCards'
import SlideShow from '@/components/dom/SlideShow'
import FadeIcon from '@/components/dom/util/FadeIcon'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const SceneContainer = dynamic(() => import('@/components/canvas/SceneContainer.jsx'))

export default function Page() {
  const [showWorld, setShowWorld] = useState(false)
  return (
    <>
      <section className='flex flex-col items-center order-1 w-full min-h-0 bg-gradient-to-b from-black'>
        <div className='flex flex-col items-center w-full h-screen md:w-11/12 lg:w-10/12 xl:w-9/12'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
            className='flex flex-col items-center justify-center w-full h-full font-bold sm:text-center sm:translate-y-20 lg:translate-y-24 2xl:translate-y-28 translate-y-4'
          >
            <h1 className='w-10/12 text-4xl sm:text-5xl'>Hi,</h1>
            <h1 className='w-10/12 text-4xl sm:text-5xl '> my name is </h1>
            <h1 className='w-10/12 pb-1 text-5xl font-black text-transparent sm:text-6xl animate-text bg-gradient-to-r from-blue-600 via-fuchsia-500 to-fuchsia-600 bg-clip-text'>
              Chris <span className='hidden font-bold sm:contents'>Ragland</span>
            </h1>
            <h1 className='w-10/12 pb-1 text-5xl font-black text-transparent sm:hidden sm:text-6xl animate-text bg-gradient-to-l from-blue-600 via-fuchsia-500 to-fuchsia-600 bg-clip-text'>
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
            <div className='flex items-center justify-center w-full mt-8 mb-4 h-max'>
              <div className='relative h-12 border before:rounded-full w-7 rounded-3xl before:w-2 before:h-2 before:absolute before:top-3 before:left-2/4 before:-translate-x-2/4 before:bg-slate-50/50 before:animate-wheel' />
            </div>
          </motion.span>
        </div>
      </section>

      {/*------------- SECTION 2 ------------ SECTION 2 ------------*/}

      <section className='relative flex flex-col items-center justify-around order-2 h-max col-span-full'>
        <SkillList />
      </section>

      {/*------------- SECTION 3 ------------ SECTION 3 ---------------*/}

      <section className='flex flex-col items-center order-3 px-2 py-10 bg-black/20 h-max col-span-full'>
        <WorkCards />
      </section>

      {/*------------- SECTION 4 ------------ SECTION 4 ---------------*/}

      <section className='flex flex-col items-center py-1 my-10 col-span-full'>
        <SlideShow />
      </section>


      {/*
      <section className='flex flex-col items-center order-4 w-full h-screen mt-20'>
        <div className='flex flex-col items-center justify-center w-full md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12'>
          <h1 className='w-11/12 mb-10 text-2xl text-left sm:text-4xl'>
            <span className='font-bold text-transparent animate-text bg-gradient-to-r via-blue-500 from-fuchsia-600 to-blue-500 bg-clip-text'>
              ...and play hard{' '}
            </span>
            🎸
          </h1>
          <div className='w-10/12 text-left md:w-8/12'>
            <p className='mb-2'>
              As you can see from recent projects, Chris has a lot of fun working with WebGL and interactive 3D web
              experiences. The problem is these experiences, depending on your computer device, can be slow or
              &apos;laggy&apos;. Chris wants everyone to have a good experience.
            </p>
            <p>
              Go ahead and click the button below and learn more about Chris&apos; world 🌎. If things get too
              &apos;laggy&apos;, just hide the 3D scene.
            </p>
          </div>
          <button
            className='px-6 py-3 mt-4 border rounded-lg cursor-pointer w-max text-slate-300 hover:bg-slate-700 hover:text-slate-100 bg-slate-800'
            onClick={() => setShowWorld((prev) => !prev)}
          >
            {showWorld ? 'Hide' : 'Show'} 3D World
          </button>
        </div>
        {showWorld && (
          <div className='relative w-full h-full'>
            <SceneContainer />
            <FadeIcon
              iconUrlString={'/icons/swipe-icon.png'}
              fadeTimeNumber={2500}
              altString='swipe left or right icon'
              className='absolute bottom-0 z-30 opacity-1 transition duration-1000 right-1/2 translate-x-1/2'
            />
          </div>
        )}
      </section>
      //*/}
    </>
  )
}
