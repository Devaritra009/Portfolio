interface SectionHeadingProps {
  eyebrow: string
  title: string
  copy?: string
}

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {copy && <p className="mt-5 text-base leading-7 text-white/55">{copy}</p>}
    </div>
  )
}
