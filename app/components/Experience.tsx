import { Experience as ExperienceType } from '@/data/experience'
import Link from 'next/link'

export default function Experience({ data }: { data: ExperienceType }) {
  return (
    <div className="flex items-center border-b-[1.5px] border-white/30 py-5 text-sm text-pale">
      <Link
        href={data.url}
        target="_blank"
        rel="noreferrer"
        className="flex-1 underline decoration-white/70 underline-offset-4 transition-colors hover:decoration-white/90"
      >
        <h3 className="text-base font-bold uppercase">{data.company}</h3>
      </Link>
      <p className="flex-1">{data.startDate.getDate()}</p>
      <p className="flex-1">{data.role}</p>
      <p className="flex-1">{data.location}</p>
    </div>
  )
}
