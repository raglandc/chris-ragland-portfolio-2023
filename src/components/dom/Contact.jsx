import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { useState } from 'react'
import Portal from '../util/Portal'

export default function ContactButton(props) {
  const [showContact, setShowContact] = useState(false)

  const showContactHandler = () => {
    setShowContact((prev) => !prev)
  }

  return (
    <>
      <button
        onClick={showContactHandler}
        className='px-2 py-1 text-white shadow-md active:shadow-sm rounded-md hover:bg-secondary bg-primary h-max'
      >
        Contact
      </button>

      {showContact && (
        <ContactWindow
          closeHandler={showContactHandler}
          layoutRef={props.layoutRef}
        />
      )}
    </>
  )
}

function ContactWindow(props) {
  return (
    <Portal>
      <div className='w-3/4 bg-white rounded-lg'>
        <div className='flex justify-between w-full p-4 rounded-t-lg'>
          <h1 className=''>
            Say <span className='text-primary'>Hi</span> 👋{' '}
          </h1>
          <p onClick={props.closeHandler}> close [x] </p>
        </div>
        <ul className='w-full px-4 py-2 h-max'>
          <ContactLink
            link='https://www.linkedin.com/in/raglandc/'
            icon={<FaLinkedin />}
            title='LinkedIn'
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
        {props.icon}
        <span> </span> {props.title}
      </a>
    </li>
  )
}
