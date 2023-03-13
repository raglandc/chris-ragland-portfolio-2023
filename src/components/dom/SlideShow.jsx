import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion";

//array of photos
const photos = [
  {
    photoLink: '/img/work-images/daily-derivative-landing-page.webp',
    description: "test 1"
  },
  {
    photoLink: '/img/work-images/vidal-developers-landing-page.webp',
    description: "test 2"
  },
  {
    photoLink: '/img/work-images/vidal-version-2-landing-page.webp',
    description: "test 3"
  },
]


export default function SlideShow()
{
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);


  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    )
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) showNextImage();
    }, 4000);

    return () => { clearInterval(intervalId) }
  }, [isPaused]);

  return (
  <div className="w-10/12 h-96">
    <h1 className='w-11/12 mb-10 text-2xl sm:text-4xl'>
          <span className='font-bold text-left text-transparent animate-text bg-gradient-to-r via-blue-500 from-fuchsia-600 to-blue-500 bg-clip-text'>
           A look at Chris&apos; life{' '}
          </span>
          👀
    </h1>
    <div className="relative mx-auto">
    <AnimatePresence>
      {photos.map((image, index) => (
        index === currentImageIndex && <motion.img
          className="rounded-lg"
          key={index}
          src={image.photoLink}
          alt={image.description}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.5}}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{position: "absolute"}}
        />
      ))}
    </AnimatePresence>
    </div>
  </div>)
}