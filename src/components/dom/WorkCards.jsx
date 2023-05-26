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
import PortalOverlay from './util/PortalOverlay'

export default function WorkCards() {
  const headerRef = useRef(null)
  const groupRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })
  const groupInView = useInView(groupRef, { once: true, margin: '-150px' })

  return (
    <div className='flex flex-col items-center justify-center w-full h-full md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12'>
      <h1
        ref={headerRef}
        style={{
          opacity: headerInView ? 1 : 0,
          transition: 'all 2s ease-in-out',
        }}
        className='w-11/12 mb-10 text-2xl sm:text-4xl'
      >
        <span className='font-bold text-left text-transparent animate-text bg-gradient-to-r via-blue-500 from-fuchsia-600 to-blue-500 bg-clip-text'>
          Work hard, play hard{' '}
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
        className='flex flex-col items-center w-8/12 my-4 sm:p-2 sm:w-6/12 xl:w-4/12'
      >
        <p className='text-slate-300'>
          If you would like to see more of Chris&apos;s work, check out his github for more projects. 👨‍💻
        </p>
        <div className='relative w-10/12 mt-10 lg:w-8/12 group'>
          <div className='absolute rounded-lg opacity-75 -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-blue-600 blur group-hover:opacity-100 transition duration-200' />
          <button className='relative w-full text-center rounded-sm bg-slate-800 text-slate-300 group-hover:text-slate-100'>
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
  const [showPopUp, setShowPopUp] = useState(false)
  const showPopUpHandler = () => {
    setShowPopUp((prev) => !prev)
  }

  return (
    <>
      <div
        ref={cardRef}
        onClick={showPopUpHandler}
        className='w-11/12 mx-2 my-4 rounded-sm cursor-pointer group hover:scale-105 sm:mx-1 lg:mx-2 lg:my-8 sm:w-8/12 md:w-1/3 h-max bg-slate-100/20'
      >
        <div className='relative w-full h-48 overflow-hidden rounded-t-sm'>
          <Image
            src={image}
            alt={`${title} website`}
            layout='fill'
            objectFit='cover'
            className='group-hover:scale-105'
            style={{ borderTopRightRadius: '.10rem', borderTopLeftRadius: '.10rem' }}
          />
        </div>
        <div className='w-full h-24 p-4 rounded-b-sm bg-slate-800'>
          <h3 className='font-bold '>{title}</h3>
          <p className='text-slate-400'>{projectType}</p>
        </div>
      </div>

      {showPopUp && (
        <>
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
    <PortalOverlay className='absolute top-0 left-0 z-30 flex justify-center w-screen h-full overflow-y-scroll from-black/90 bg-gradient-to-b to-slate-900 text-slate-100'>
      <div className='flex flex-col items-center w-11/12 h-full py-3 my-3 sm:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-1/3 md:w-9/12 lg:p-4 xl:p-6'>
        <div className='flex items-center justify-between w-full px-6 py-3 my-4'>
          <h1 className='w-11/12 text-4xl font-bold'>{title}</h1>
          <VscClose
            className='w-6 h-6 p-1 cursor-pointer hover:rounded-full hover:bg-slate-300/50'
            onClick={closeHandler}
          />
        </div>
        <div className='flex flex-col items-center w-10/12'>
          <div className='relative w-full h-48 my-4'>
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
            <button className='w-full py-2 my-4 border rounded-sm hover:bg-slate-500/50'>
              <a
                target='_blank'
                href={link}
                rel='noreferrer'
              >
                Visit Site
              </a>
            </button>
          )}
          <p className='my-4 text-slate-300'>{description}</p>
          <p className='pt-3 my-2 text-center text-slate-400'>Project Skills</p>
          <div className='flex flex-wrap items-center justify-around w-full pt-4 my-4 text-xl'>
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
      'Vidal Developers is a freelance web development business Chris started when he began learning web development. This was his first start to finish react application. Chris got a first hand experience as to why it is mobile-first when designing responsive web apps.',
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
      'The Daily Derivative is a daily calculus problem game where users can sign up and keep track of their stats with an account and retain calculus skills over a period of time such as a holiday break from school. Chris actually had to design software to take user input and convert it to latex code. It was challenging and took several designs, but the final design discussed in the docs works really well and is intuitive to how we normally enter equations into a calculator.',
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
      'Vidal Developers V2 is the second version of the free lance website. The second rendition features new skills and technologies such as ThreeJs and Svelte. The web page is interactive, meaning users are able to interact with the scenes background objects. The site features a blog using mark down for the styling of blog entries. Chris is working on improving the performance of the website to give a better experience to the users and hopes to push to production this year.',
    skills: [
      <SiTypescript key={'Typescript Logo'} />,
      <SiSvelte key={'Svelte Logo'} />,
      <SiThreedotjs key={'ThreeJS Logo'} />,
      <SiBlender key={'Blender Logo'} />,
    ],
  },
]
