export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='flex flex-col items-center justify-center order-last w-full h-64 text-slate-100 from-black bg-gradient-to-t'>
      <p className='mt-5'> Made With ❤️ by Chris Ragland </p>
      <p className='mt-5'>&copy; {year} </p>
      <p className='px-5 mt-5 text-sm text-center text-slate-500'>
        A special thanks to Sriniwasjha, Pozo3d, Alex Sanches, and Ole Gunnar Isager for letting me use their beautiful
        art work for some of this project.
      </p>
    </footer>
  )
}
