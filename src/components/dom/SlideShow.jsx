//array of photos

import Image from "next/image"

const photos = [
  {
    photoId: 0,
    photoLink: '/img/banner.png'
  },
]


export default function SlideShow()
{
  return <Slide photos={photos}/>
}

function Slide( { photos } )
{
 return <Image width={255} height={255} src={photos[0].photoLink} alt={photos[0].photoId}/>
}