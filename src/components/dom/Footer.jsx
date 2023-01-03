export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='flex flex-col items-center justify-center order-last text-white h-60 from-black bg-gradient-to-t col-span-full'>
      <p> Made With ❤️ by Chris Ragland </p>
      <p>&copy; {year} </p>
    </footer>
  )
}
