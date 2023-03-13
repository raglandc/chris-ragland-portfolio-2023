import Image from "next/image"
import { useState, useEffect } from "react"

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
  <div className="w-10/12">
    {photos.map((image, index) => (
      <Image
        src={image.photoLink}
        width={1024}
        height={1024}
        alt={image.description}
        key={index}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{display: index === currentImageIndex ? "block" : "none"}}
      />
    ))}
  </div>)
}