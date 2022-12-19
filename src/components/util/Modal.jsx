// function Card(props) {
//   return (
//     <div className='flex flex-col w-3/4 bg-white text-textPrimary h-3/4'>
//       <h3>Indiana</h3>
//       <p>Chris lived in Indiana before moving to florida in 2016</p>
//       <p>If you like corn, you should check it out</p>
//     </div>
//   )
// }

export default function Modal(props) {
  return (
    <div
      onClick={props.setShowIndiana}
      className='z-20 flex items-center justify-center h-full opacity-75 bg-textSecondary'
    >
      <div className='flex flex-col w-3/4 bg-white text-textPrimary h-3/4'>
        <h2>Indiana</h2>
        <p>Chris lived in Indiana before moving to florida in 2016</p>
        <p>If you like corn, you should check it out</p>
      </div>
    </div>
  )
}
