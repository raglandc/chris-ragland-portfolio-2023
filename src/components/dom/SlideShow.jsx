import { useState, useEffect, useRef } from "react"
import { useInView } from 'framer-motion'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { AnimatePresence, motion } from "framer-motion"

//array of photos
const photos = [
  {
    photoLink: '/img/life-images/after-hackabull-2023.webp',
    description: "My friends and I after our schools 2023 hack-a-thon"
  },
  {
    photoLink: '/img/life-images/cda-circuit.webp',
    description: "A circuit I built in my logic and design lab."
  },
  {
    photoLink: '/img/life-images/group-photo.webp',
    description: "T'was the night before our Computer Org. final"
  },
  {
    photoLink: '/img/life-images/before-hackabull-2023.webp',
    description: "My friends and I before our schools 2023 hack-a-thon"
  },
]


export default function SlideShow()
{
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const headerRef = useRef();
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })

  const showNextImage = () =>
  {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    )
  }

  const showPrevImage = () =>
  {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    )
  }

  useEffect(() =>
  {
    const intervalId = setInterval(() =>
    {
      if(!isPaused) 
        showNextImage();
    }, 4000);

    return () => { clearInterval(intervalId) }
  }, [isPaused]);

  return (
  <div className="flex flex-col w-full h-full md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12">
    <h1 
      ref={headerRef}
      style={{
        opacity: headerInView ? 1 : 0,
        transition: 'all 2s ease-in-out',
      }}
      className='w-11/12 mb-10 text-2xl sm:text-4xl'>
          <span className='font-bold text-left text-transparent animate-text bg-gradient-to-r via-blue-500 from-fuchsia-600 to-blue-500 bg-clip-text'>
           A look at Chris&apos; life{' '}
          </span>
          👀
    </h1>
    <div
      className="relative flex justify-center w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          src={photos[currentImageIndex].photoLink} 
          key={photos[currentImageIndex].photoLink}
          alt={photos[currentImageIndex].description} 
          className="rounded-sm"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: .62}}
          exit={{opacity: 0}}
        />
      </AnimatePresence>
      <div className="absolute bottom-0 w-full p-2 text-center bg-blue-900/40">
        {photos[currentImageIndex].description}
      </div>
      <div className="absolute px-3 place-items-center grid-cols-3 grid -bottom-12">
        <button onClick={showPrevImage}>
          <BsArrowLeft className="text-3xl hover:fill-blue-500 hover:scale-105" />
        </button>
        <div className="mx-3 text-xl">
          {/* The ...toString(2).padStart(3, '0') ensures that the binary is always 3 bits */}
          <p>{(currentImageIndex + 1).toString(2).padStart(3, '0')} : {currentImageIndex + 1}</p>
        </div>
        <button onClick={showNextImage}>
          <BsArrowRight className="text-3xl hover:fill-blue-500 hover:scale-105" />
        </button>
      </div>
    </div>
  </div>)
}