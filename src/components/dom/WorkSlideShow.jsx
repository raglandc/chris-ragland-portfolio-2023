import { useState } from 'react'
import Image from 'next/legacy/image'
import { motion } from 'framer-motion'
import PortalOverlay from '../util/PortalOverlay'
import PortalBackdrop from '../util/PortalBackdrop'
import { VscClose } from 'react-icons/vsc'

export default function WorkSlideShow() {
  return (
    <div className='w-9/12 h-max'>
      {workArray.map((item, index) => (
        <Slide
          key={index}
          title={item.title}
          link={item.link}
          image={item.image}
          projectType={item.projectType}
          description={item.description}
        />
      ))}
    </div>
  )
}

function Slide({ title, link, description, image, projectType }) {
  const [showPopUp, setShowPopUp] = useState(false)
  const showPopUpHandler = () => {
    setShowPopUp((prev) => !prev)
  }

  return (
    <>
      <motion.div
        onClick={showPopUpHandler}
        initial={{ x: '-200%' }}
        animate={{ x: 0 }}
        whileHover={{ scale: 1.025 }}
        transition={{ ease: 'easeOut' }}
        className='w-full my-8 rounded-lg cursor-pointer h-max bg-white/20 backdrop-blur-lg drop-shadow-md'
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
        <div className='w-full h-20 px-5 py-4 rounded-b-lg bg-slate-800'>
          <h3 className='font-bold'>{title}</h3>
          <p className='text-slate-400'>{projectType}</p>
        </div>
      </motion.div>

      {showPopUp && (
        <>
          <PortalBackdrop onClick={showPopUpHandler} />
          <SlidePopUp
            closeHandler={showPopUpHandler}
            title={title}
            projectType={projectType}
            image={image}
            link={link}
            description={description}
          />
        </>
      )}
    </>
  )
}

function SlidePopUp({ title, link, image, projectType, description, closeHandler }) {
  return (
    <PortalOverlay className='fixed z-30 flex justify-center w-max -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 h-max text-slate-100'>
      <div className='w-10/12 bg-slate-800'>
        <div className='flex items-center justify-center'>
          <h2>{title}</h2>
          <VscClose />
        </div>
      </div>
    </PortalOverlay>
  )
}

const workArray = [
  {
    title: 'Vidal Developers',
    link: 'https://vidaldevelopers.com',
    image: '/img/work-images/vidal-landing-page.png',
    projectType: 'Web Development',
    description:
      'Vidal Developers is a freelance web development business Chris started when he began learning web development.',
  },
  {
    title: 'The Daily Derivative',
    link: 'https://the-daily-derivative.vercel.app',
    image: '/img/work-images/daily-derivative-landing-page.png',
    projectType: 'Web Development',
    description:
      'The Daily Derivative is a daily calculus problem game where users can sign up and keep track of their stats with an account and retain calculus skills over a period of time such as a holiday break from school.',
  },
]
