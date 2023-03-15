import { useState, useEffect, useRef } from "react"
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

//array of photos
const photos = [
  {
    photoLink: '/img/life-images/cda-lab.webp',
    description: "cda lab circuit"
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
  <div className="flex flex-col items-center justify-center w-full h-full md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12">
    <h1 className='w-11/12 mb-10 text-2xl sm:text-4xl'>
          <span className='font-bold text-left text-transparent animate-text bg-gradient-to-r via-blue-500 from-fuchsia-600 to-blue-500 bg-clip-text'>
           A look at Chris&apos; life{' '}
          </span>
          👀
    </h1>
    <div
      ref={slideRef}
      className="relative flex justify-center w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Image
        src={photos[currentImageIndex].photoLink} 
        alt={photos[currentImageIndex].description} 
        className="aspect-video rounded-xl"
        width={1024}
        height={1024}
      />
      <div className="absolute px-3 place-items-center grid-cols-3 grid -bottom-10">
        <button onClick={showPrevImage}>
          <BsArrowLeft className="text-3xl hover:fill-blue-500 hover:scale-105" />
        </button>
        <div className="mx-3 text-xl">
          <p>{currentImageIndex === 0 ? "00" : "0"}{(currentImageIndex + 1).toString(2)} : {photos.length}</p>
        </div>
        <button onClick={showNextImage}>
          <BsArrowRight className="text-3xl hover:fill-blue-500 hover:scale-105" />
        </button>
      </div>
    </div>
  </div>)
}