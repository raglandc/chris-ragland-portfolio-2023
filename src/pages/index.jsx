import Image from 'next/image'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import SkillList from '@/components/dom/SkillList'
import WorkCards from '@/components/dom/WorkCards'

export default function Page() {
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

    </>
  )
}
