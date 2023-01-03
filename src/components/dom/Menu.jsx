import { useState } from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { VscClose } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import PortalOverlay from './util/PortalOverlay.jsx'
import PortalBackdrop from './util/PortalBackdrop.jsx'

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false)

  const showMenuHandler = () => {
    setShowMenu((prev) => !prev)
  }

  return (
    <>
      <div
        onClick={showMenuHandler}
        className='flex flex-col items-end justify-center w-5 cursor-pointer h-max hover:scale-110 ease-in-out'
      >
        <div className={'w-full h-px bg-white my-0.5'} />
        <div
          className={!showMenu ? 'w-full h-px bg-white my-0.5 ease-in-out' : 'ease-in-out h-px my-0.5 bg-white w-2/4'}
        />
        <div className={'w-full h-px bg-white my-0.5'} />
      </div>

      {showMenu && (
        <>
          <PortalBackdrop onClick={showMenuHandler} />
          <MenuWindow closeHandler={showMenuHandler} />
        </>
      )}
    </>
  )
}

function MenuWindow({ closeHandler }) {
  return (
    <PortalOverlay className='fixed z-30 flex justify-center w-max -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 h-max'>
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className='px-3 text-lg bg-slate-800 text-slate-100 rounded-xl h-80 w-max'
      >
        <div className='flex items-center justify-between w-full px-3 py-4 rounded-t-lg'>
          <h1 className='text-2xl font-bold'>
            Say <span className='font-bold text-indigo-600'>Hi</span> 👋
          </h1>
          <VscClose
            className='p-1 cursor-pointer w-max h-max hover:rounded-full hover:bg-black/30'
            onClick={closeHandler}
          />
        </div>
        <ul className='flex flex-col items-center justify-center w-full px-4'>
          <ContactLink
            link='https://www.linkedin.com/in/raglandc/'
            icon={<FaLinkedin />}
            title='LinkedIn'
          />
          <ContactLink
            link='https://www.github.com/raglandc'
            icon={<FaGithub />}
            title='GitHub'
          />
          <ContactLink
            link='https://www.instagram.com/chris_ragland/'
            icon={<FaInstagram />}
            title='Instagram'
          />
          <ContactLink
            link='chrisragland97@gmail.com'
            icon={<MdAlternateEmail />}
            title='Chrisragland97@gmail.com'
          />
        </ul>
      </motion.div>
    </PortalOverlay>
  )
}

function ContactLink({ link, icon, title }) {
  return (
    <li className='w-full my-2'>
      <a
        className='flex items-center w-full py-2'
        target='_blank'
        href={link}
        rel='noreferrer'
      >
        <span className='mr-2'>{icon}</span>
        {title}
      </a>
    </li>
  )
}
