import { useState, useRef } from 'react'
import Image from 'next/legacy/image'
import { useInView } from 'framer-motion'
import { VscClose } from 'react-icons/vsc'
import {
  SiReact,
  SiTypescript,
  SiBlender,
  SiNextdotjs,
  SiSvelte,
  SiThreedotjs,
  SiCss3,
  SiMongodb,
  SiAuth0,
  SiGithub,
} from 'react-icons/si'
import PortalOverlay from '../util/PortalOverlay'
import PortalBackdrop from '../util/PortalBackdrop'

export default function WorkCards() {
  const headerRef = useRef(null)
  const groupRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })
  const groupInView = useInView(groupRef, { once: true, margin: '-150px' })

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <h1
        ref={headerRef}
        style={{
          opacity: headerInView ? 1 : 0,
          transition: 'all 2s ease-in-out',
        }}
        className='w-11/12 text-2xl sm:text-4xl'
      >
        <span className='font-bold text-left text-transparent animate-text bg-gradient-to-r via-blue-500 from-fuchsia-600 to-blue-500 bg-clip-text'>
          I work hard...{' '}
        </span>
        💼
      </h1>
      <div className='flex flex-col items-center justify-center w-10/12 md:w-full xl:w-10/12 sm:flex-row  h-max'>
        {workArray.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            link={item.link}
            image={item.image}
            projectType={item.projectType}
            description={item.description}
            skills={item.skills}
          />
        ))}
      </div>
      <div
        ref={groupRef}
        style={{
          opacity: groupInView ? 1 : 0,
          transition: 'opacity 2s ease-out',
        }}
        className='flex flex-col items-center w-8/12 my-4'
      >
        <p className='text-slate-300'>
          If you would like to see more of Chris&apos;s work, check out his github for more projects. 👨‍💻
        </p>
        <div className='relative w-10/12 mt-10 lg:w-8/12 group'>
          <div className='absolute rounded-lg opacity-75 -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-blue-600 blur group-hover:opacity-100 transition duration-200' />
          <button className='relative w-full text-center rounded-lg bg-slate-800 text-slate-300 group-hover:text-slate-100'>
            <a
              target='_blank'
              href='https://www.github.com/raglandc'
              rel='noreferrer'
              className='flex items-center justify-center w-full h-full px-6 py-2 text-sm'
            >
              Visit GitHub <SiGithub className='inline ml-2' />
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

function Card({ title, link, description, image, projectType, skills }) {
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, { once: true })

  const [showPopUp, setShowPopUp] = useState(false)
  const showPopUpHandler = () => {
    setShowPopUp((prev) => !prev)
  }

  return (
    <>
      <div
        ref={cardRef}
        style={{
          opacity: cardInView ? 1 : 0,
          transform: cardInView ? 'translateY(0)' : 'translateY(100%)',
          transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
        onClick={showPopUpHandler}
        className='w-11/12 mx-3 my-8 rounded-lg cursor-pointer sm:w-8/12 md:w-1/3 h-max bg-white/20 backdrop-blur-lg drop-shadow-md'
      >
        <div className='relative w-full h-48 rounded-t-lg'>
          <Image
            src={image}
            alt={`${title} website`}
            layout='fill'
            objectFit='cover'
            style={{ borderTopRightRadius: '.5rem', borderTopLeftRadius: '.5rem' }}
          />
        </div>
        <div className='w-full h-24 p-3 rounded-b-lg bg-slate-800'>
          <h3 className='font-bold'>{title}</h3>
          <p className='text-slate-400'>{projectType}</p>
        </div>
      </div>

      {showPopUp && (
        <>
          <PortalBackdrop onClick={showPopUpHandler} />
          <CardPopUp
            closeHandler={showPopUpHandler}
            title={title}
            projectType={projectType}
            image={image}
            link={link}
            description={description}
            skills={skills}
          />
        </>
      )}
    </>
  )
}

function CardPopUp({ title, link, image, description, closeHandler, skills }) {
  return (
    <PortalOverlay className='fixed z-30 flex justify-center w-full max-h-screen max-w-screen -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 h-max text-slate-100'>
      <div className='flex flex-col items-center w-10/12 py-3 my-4 overflow-y-scroll rounded-lg sm:w-8/12 md:w-7/12 xl:w-4/12 lg:p-3 lg:w-5/12 lg:overflow-y-hidden bg-slate-800'>
        <div className='flex items-center justify-between w-full px-6 py-3'>
          <h1 className='w-11/12 text-4xl font-bold'>{title}</h1>
          <VscClose
            className='p-1 cursor-pointer w-max h-max hover:rounded-full hover:bg-slate-900/30'
            onClick={closeHandler}
          />
        </div>
        <div className='flex flex-col items-center w-10/12'>
          <div className='relative w-full h-48'>
            <Image
              src={image}
              alt={`${title} website`}
              layout='fill'
              objectFit='cover'
              style={{ borderRadius: '.5rem' }}
            />
          </div>
          {/* if the project has a link, show a button that will take them to the web page */}
          {link && (
            <button className='w-full py-1 mt-4 border rounded-lg bg-slate-500/30 hover:bg-slate-500/50'>
              <a
                target='_blank'
                href={link}
                rel='noreferrer'
              >
                Visit Site
              </a>
            </button>
          )}
          <p className='py-4 text-slate-300'>{description}</p>
          <p className='pt-3 text-center'>Project Skills</p>
          <div className='flex flex-wrap items-center justify-around w-full pt-4 my-2 mb-3 text-xl'>
            {skills.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </PortalOverlay>
  )
}

const workArray = [
  {
    title: 'Vidal Developers',
    link: 'https://vidaldevelopers.com',
    image: '/img/work-images/vidal-developers-landing-page.webp',
    projectType: 'Web Development',
    description:
      'Vidal Developers is a freelance web development business Chris started when he began learning web development.',
    skills: [
      <SiTypescript key={'Typescript Logo'} />,
      <SiReact key={'React Logo'} />,
      <SiNextdotjs key={'NextJS Logo'} />,
      <SiCss3 key={'Css3 Logo'} />,
    ],
  },
  {
    title: 'The Daily Derivative',
    link: 'https://the-daily-derivative.vercel.app',
    image: '/img/work-images/daily-derivative-landing-page.webp',
    projectType: 'Web Development',
    description:
      'The Daily Derivative is a daily calculus problem game where users can sign up and keep track of their stats with an account and retain calculus skills over a period of time such as a holiday break from school.',
    skills: [
      <SiTypescript key={'Typescript Logo'} />,
      <SiReact key={'React Logo'} />,
      <SiNextdotjs key={'NextJS Logo'} />,
      <SiCss3 key={'Css3 Logo'} />,
      <SiMongodb key={'MongoDB Logo'} />,
      <SiAuth0 key={'Auth0 Logo'} />,
    ],
  },
  {
    title: 'Vidal Developers V2',
    link: '',
    image: '/img/work-images/vidal-version-2-landing-page.webp',
    projectType: 'Web Development',
    description:
      'Vidal Developers V2 is the second version of the concept free lance website. The second rendition features new skills and technologies such as ThreeJs and Svelte. The web page is interactive, users are able to interact with the scenes background objects. The site features a blog using mark down for the styling of blog entries',
    skills: [
      <SiTypescript key={'Typescript Logo'} />,
      <SiSvelte key={'Svelte Logo'} />,
      <SiThreedotjs key={'ThreeJS Logo'} />,
      <SiBlender key={'Blender Logo'} />,
    ],
  },
]
