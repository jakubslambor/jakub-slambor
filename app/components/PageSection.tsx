import { PropsWithChildren } from 'react'

export default function PageSection({
  children,
  name,
  subtitle,
}: PropsWithChildren<{ name: string; subtitle?: string }>) {
  return (
    <section className="mt-16 lg:mx-24">
      <div className="mb-6 flex items-baseline justify-between border-b-[1.5px] border-b-steel pb-2">
        <h2 className="font-grotesk text-2xl font-bold uppercase text-white">
          {name}
        </h2>

        {subtitle && <p className="font-serif text-white/70">{subtitle}</p>}
      </div>

      {children}
    </section>
  )
}
