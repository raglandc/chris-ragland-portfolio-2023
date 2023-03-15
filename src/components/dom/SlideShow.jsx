import { useState, useEffect, useRef } from "react"
import Image from "next/image";

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
  const slideRef = useRef();

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
  <div className="w-10/12 m-auto">
    <h1 className='w-11/12 mb-10 text-2xl sm:text-4xl'>
          <span className='font-bold text-left text-transparent animate-text bg-gradient-to-r via-blue-500 from-fuchsia-600 to-blue-500 bg-clip-text'>
           A look at Chris&apos; life{' '}
          </span>
          👀
    </h1>
    <div
      ref={slideRef}
      className="relative flex justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Image
        src={photos[currentImageIndex].photoLink} 
        alt={photos[currentImageIndex].description} 
        className="rounded-xl"
        width={1024}
        height={1024}
      />
      <div className="absolute flex items-center justify-around w-full px-3 -bottom-12 transform -translate-y-1/2">
        <button onClick={showPrevImage}>Prev</button>
        <div>
          <p>{currentImageIndex === 0 ? "00" : "0"}{(currentImageIndex + 1).toString(2)} : {photos.length}</p>
        </div>
        <button onClick={showNextImage}>Next</button>
      </div>
    </div>
  </div>)
}