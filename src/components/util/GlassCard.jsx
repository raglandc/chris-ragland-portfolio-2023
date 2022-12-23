export default function GlassCard({ children, ...props }) {
  return (
    <div
      {...props}
      className='w-3/4 rounded-lg bg-white/20 backdrop-blur-lg drop-shadow-md h-1/4'
    >
      {children}
    </div>
  )
}
