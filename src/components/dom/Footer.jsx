export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='flex flex-col items-center justify-center order-last h-40 text-white bg-black col-span-full'>
      <p> Made With ❤️ by Chris Ragland </p>
      <p>&copy; {year} </p>
    </footer>
  )
}
