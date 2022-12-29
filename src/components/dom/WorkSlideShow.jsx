import Image from 'next/legacy/image'
import { motion } from 'framer-motion'

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

function Slide({ title, link, image, projectType }) {
  return (
    <motion.div
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
