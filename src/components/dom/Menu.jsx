import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { useState } from 'react'
import Portal from '../util/Portal.jsx'

export default function Menu(props) {
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
        <MenuWindow
          closeHandler={showMenuHandler}
          layoutRef={props.layoutRef}
        />
      )}
    </>
  )
}

function MenuWindow(props) {
  return (
    <Portal>
      <div className='w-3/4 bg-white rounded-lg'>
        <div className='flex justify-between w-full p-4 rounded-t-lg'>
          <h1 className='text-lg font-bold'>
            Say <span className='text-primary'>Hi</span> 👋{' '}
          </h1>
          <p
            className='cursor-pointer hover:underline hover:underline-offset-4'
            onClick={props.closeHandler}
          >
            {' '}
            close [x]{' '}
          </p>
        </div>
        <ul className='w-full px-4 py-2 h-max'>
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
            link='https://www.instagram.com/in/chris_ragland/'
            icon={<FaInstagram />}
            title='Instagram'
          />
          <ContactLink
            link='chrisragland97@gmail.com'
            icon={<MdAlternateEmail />}
            title='Chrisragland97@gmail.com'
          />
        </ul>
      </div>
    </Portal>
  )
}

function ContactLink(props) {
  return (
    <li className='w-full my-2'>
      <a
        className='flex items-center w-full py-2'
        target='_blank'
        href={props.link}
        rel='noreferrer'
      >
        <span className='mr-2 '>{props.icon}</span>
        {props.title}
      </a>
    </li>
  )
}
