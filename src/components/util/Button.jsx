export default function Button({ title, link }) {
  return (
    <div className='relative w-10/12 mt-4'>
      <div className='absolute rounded-lg opacity-75 -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 blur' />
      <button className='relative w-full py-2 bg-black rounded-lg'>
        <a href={link}>{title}</a>
      </button>
    </div>
  )
}
