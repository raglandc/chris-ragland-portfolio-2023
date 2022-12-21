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
      <div className='w-2/4 bg-white'>
        <div className='flex justify-around w-full'>
          <h1>Say Hi 👋</h1>
          <p onClick={props.closeHandler}> close [x] </p>
        </div>
      </div>
    </Portal>
  )
}
