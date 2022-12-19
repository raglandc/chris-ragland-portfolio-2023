export default function Modal(props) {
  return (
    <div className='z-20 flex items-center justify-center h-full bg-textSecondary/70'>
      <div className='flex flex-col w-3/4 bg-white rounded-lg text-textPrimary h-max '>
        <div className='flex justify-between w-full p-4 text-white rounded-t-lg h-max bg-primary'>
          <h2>{props.state}</h2>
          <p onClick={props.setShowState}>close [x]</p>
        </div>
        <div className='p-4'>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}
