import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function SkillList({ ...props }) {
  return (
    <div
      {...props}
      className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full'
    >
      <h1 className='w-3/4 text-5xl font-bold font-black text-left text-transparent text-white animate-text bg-gradient-to-r via-blue-500 from-fuchsia-600 to-blue-500 bg-clip-text'>
        Skills
      </h1>
      <p className='relative my-5 text-white'>
        <span className='mx-2 text-3xl'>&ldquo;</span>The best way to predict the future is to invent it
        <span className='mx-2 text-3xl'>&rdquo;</span>
        <span className='absolute italic -right-4 -bottom-8'>- Alan Kay</span>
      </p>
    </div>
  )
}
