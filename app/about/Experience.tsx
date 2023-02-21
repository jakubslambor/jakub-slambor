import { Experience as ExperienceType } from '@/data/experience'
import Link from 'next/link'

export default function Experience({ data }: { data: ExperienceType }) {
  const startDate = data.startDate.toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
  })
  const endDate = data.endDate
    ? data.endDate.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      })
    : 'present'

  const getDuration = (start: Date, end?: Date) => {
    end ??= new Date()

    const diff = Math.abs(end.getTime() - start.getTime())

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12

    return `${years ? (years > 1 ? `${years} yrs ` : `${years} yr `) : ''}${
      months ? (months > 1 ? `${months} mos` : `${months} mo`) : ''
    }`
  }

  return (
    <div className="items-center border-b-[1.5px] border-white/30 py-4 text-sm leading-relaxed text-pale md:flex md:py-5 md:leading-snug">
      <Link
        href={data.url}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex-grow-[1.15] underline decoration-white/70 underline-offset-4 transition-colors hover:decoration-white/90"
      >
        <h3 className="mb-1 text-base font-bold uppercase md:mb-0">
          {data.company}
        </h3>
      </Link>

      <p className="flex-1">{data.role}</p>

      <p className="flex-1 flex-grow-[1.35]">
        {`${startDate} - ${endDate} · `}
        <span className="whitespace-nowrap">
          {getDuration(data.startDate, data.endDate)}
        </span>
      </p>

      <p className="flex-1">{data.location}</p>
    </div>
  )
}
