export default function WorkSlideShow() {
  return (
    <div className='w-10/12 h-max'>
      <h1>Slider</h1>
      <Slide />
    </div>
  )
}

function Slide({ title, link, image }) {
  return <div className='w-full h-32'>Card</div>
}
