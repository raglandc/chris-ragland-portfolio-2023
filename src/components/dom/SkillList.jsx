import { motion } from 'framer-motion'
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiBlender,
  SiCplusplus,
  SiC,
  SiNextdotjs,
  SiSvelte,
  SiThreedotjs,
  SiHtml5,
  SiCss3,
} from 'react-icons/si'

const skillsArray = [
  { title: 'JavaScript', logo: <SiJavascript /> },
  { title: 'TypeScript', logo: <SiTypescript /> },
  { title: 'React', logo: <SiReact /> },
  { title: 'NextJs', logo: <SiNextdotjs /> },
  { title: 'C++', logo: <SiCplusplus /> },
  { title: 'C', logo: <SiC /> },
  { title: 'HTML', logo: <SiHtml5 /> },
  { title: 'CSS', logo: <SiCss3 /> },
  { title: 'Blender', logo: <SiBlender /> },
  { title: 'ThreeJs', logo: <SiThreedotjs /> },
  { title: 'Svelte', logo: <SiSvelte /> },
]

export default function SkillList({ ...props }) {
  return (
    <>
      <div
        {...props}
        className='flex flex-col items-center justify-center w-full my-10 h-max'
      >
        <h1 className='w-3/4 text-5xl font-bold font-black text-left text-transparent text-white animate-text bg-gradient-to-r via-blue-500 from-fuchsia-600 to-blue-500 bg-clip-text'>
          Skills
        </h1>
        <p className='relative my-5 text-white'>
          <span className='mx-2 text-3xl'>&ldquo;</span>The best way to predict the future is to invent it
          <span className='mx-2 text-3xl'>&rdquo;</span>
          <span className='absolute italic -right-1 -bottom-8'>- Alan Kay</span>
        </p>
      </div>
      <div className='w-full p-1 grid place-content-center place-items-center grid-cols-3 gap-2 h-max'>
        {skillsArray.map((item, index) => {
          return (
            <SkillCard
              title={item.title}
              logo={item.logo}
              key={index}
            />
          )
        })}
      </div>
    </>
  )
}

function SkillCard({ title, logo }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className='flex flex-col items-center justify-center  w-32 h-24 px-4 py-3 text-white border shadow-lg shadow-yellow-500/40 backdrop-blur-2xl bg-white/30 rounded-xl'
    >
      <h1 className='mb-2'>{title}</h1>
      <span className='text-2xl'>{logo}</span>
    </motion.div>
  )
}
