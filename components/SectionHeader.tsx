type SectionHeaderProps = {
  label: string
  title: string
  description: string
}

export default function SectionHeader({
  label,
  title,
  description
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
        {label}
      </p>
      <h2 className="text-4xl font-black tracking-tight md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-400">
        {description}
      </p>
    </div>
  )
}