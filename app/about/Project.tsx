import { Project as ProjectType } from '@/data/projects'
import Link from 'next/link'
import Image from 'next/image'

export default function Project({ data }: { data: ProjectType }) {
  return (
    <div className="group relative">
      <div className="cursor-default rounded-2xl border border-steel/75 bg-dark/80 p-5 text-pale backdrop-blur-md">
        <div className="flex items-center gap-x-4">
          <div className="relative h-9 w-9">
            <Image src={data.favicon} alt={data.name} fill />
          </div>

          <div>
            <Link
              href={data.url}
              target="_blank"
              rel="noreferrer"
              className="font-bold uppercase underline decoration-white/70 underline-offset-4 transition-colors hover:decoration-white/90"
            >
              {data.name}
            </Link>
            <p className="mt-1 text-sm text-white/70">
              {new URL(data.url).host}
            </p>
          </div>
        </div>

        <p className="my-5">{data.description}</p>

        {data.tags.map((tag, idx) => (
          <span className="mr-3 font-serif font-normal text-white/70" key={idx}>
            #{tag}
          </span>
        ))}
      </div>

      <Image
        src="/glow2.svg"
        alt=""
        fill
        className="-z-10 -translate-x-2 translate-y-3 scale-150 opacity-0 duration-500 ease-in-out group-hover:opacity-100"
      />
    </div>
  )
}
