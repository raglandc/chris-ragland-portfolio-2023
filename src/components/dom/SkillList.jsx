import { useRef } from 'react'
import { useInView } from 'framer-motion'
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
  SiMongodb,
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
  { title: 'MongoDB', logo: <SiMongodb /> },
]

export default function SkillList({ ...props }) {
  const headerRef = useRef(null)
  const quoteRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })
  const quoteInView = useInView(quoteRef, { once: true })
  return (
    <div
      {...props}
      className='flex flex-col items-center justify-center w-full mb-20 mt-28 md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12'
    >
      <div className='flex flex-col items-center justify-center w-full mb-20 mt-28'>
        <h1
          ref={headerRef}
          style={{
            transform: headerInView ? 'none' : 'translateY(50px)',
            opacity: headerInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='w-11/12 my-8 text-2xl sm:text-4xl'
        >
          <span className='font-bold text-left text-transparent animate-text bg-gradient-to-r via-blue-500 from-fuchsia-600 to-blue-500 bg-clip-text'>
            Yeah, I like to learn
          </span>
          📚
        </h1>
        <p
          ref={quoteRef}
          style={{
            opacity: quoteInView ? 1 : 0,
            transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='relative px-4 my-5 text-center'
        >
          <span className='mx-2 text-3xl'>&ldquo;</span>The more I learn, the more I realize how much I don&apos;t know.
          <span className='mx-2 text-3xl'>&rdquo;</span>
          <span className='absolute italic text-slate-400 right-5 -bottom-8'>- Albert Einstein</span>
        </p>
      </div>
      <div className='w-full px-2 xl:w-10/12 2xl:w-8/12 grid place-content-stretch grid-cols-3 gap-2 h-max'>
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
    </div>
  )
}

function SkillCard({ title, logo }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <span
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <div className='flex flex-col items-center justify-center px-4 py-5'>
        <h1 className='mb-3'>{title}</h1>
        <span className='text-2xl'>{logo}</span>
      </div>
    </span>
  )
}
