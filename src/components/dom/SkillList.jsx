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
    <>
      <div
        {...props}
        className='flex flex-col items-center justify-center w-full mb-20 mt-28'
      >
        <h2
          ref={headerRef}
          style={{
            transform: headerInView ? 'none' : 'translateX(-200px)',
            opacity: headerInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='w-11/12 my-8 text-2xl'
        >
          <span className='font-bold text-left text-transparent text-white animate-text bg-gradient-to-r via-blue-500 from-fuchsia-600 to-blue-500 bg-clip-text'>
            Yeah, I like to learn
          </span>
          📚
        </h2>
        <p
          ref={quoteRef}
          style={{
            opacity: quoteInView ? 1 : 0,
            transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='relative my-8 text-center text-white'
        >
          <span className='mx-2 text-3xl'>&ldquo;</span>The more I learn, the more I realize how much I don&apos;t know.
          <span className='mx-2 text-3xl'>&rdquo;</span>
          <span className='absolute italic right-3 -bottom-8'>- Albert Einstein</span>
        </p>
      </div>
      <div className='w-full px-2  grid place-content-stretch grid-cols-3 gap-2 h-max'>
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
      <div className='flex flex-col items-center justify-center px-4 py-5 text-white'>
        <h1 className='mb-3'>{title}</h1>
        <span className='text-2xl'>{logo}</span>
      </div>
    </span>
  )
}
