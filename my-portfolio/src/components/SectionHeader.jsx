export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && (
        <p className="text-slate-500 dark:text-slate-400 mt-2">{subtitle}</p>
      )}
      <div className="w-16 h-1 bg-cyan-600 dark:bg-cyan-400 mx-auto mt-4 rounded-full" />
    </div>
  )
}
