import Image from 'next/image'
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
      <div className='w-full h-48' />
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
    description:
      'Vidal Developers is a freelance web development business Chris started when he began learning web development.',
    projectType: 'Web Development',
  },
]
