import { PropsWithChildren, ReactNode } from 'react'

export default function PageSection({
  children,
  title,
  subtitle,
  columns,
  className,
}: PropsWithChildren<{
  title: string
  subtitle?: string
  columns?: ReactNode
  className?: string
}>) {
  return (
    <section className={`mt-16 xl:mx-24 ${className ? className : ''}`}>
      <div className="mb-6 flex items-baseline justify-between border-b-[1.5px] border-b-white/50 pb-2">
        <h2
          className={`font-grotesk text-2xl font-bold uppercase text-white ${
            columns ? 'flex-1 flex-grow-[1.15]' : ''
          }`}
        >
          {title}
        </h2>

        {subtitle && (
          <p className="font-serif italic text-white/80">{subtitle}</p>
        )}
        {columns && columns}
      </div>

      {children}
    </section>
  )
}
