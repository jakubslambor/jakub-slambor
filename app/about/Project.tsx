import { Project as ProjectType } from '@/data/projects'
import Link from 'next/link'
import Image from 'next/image'

export default function Project({ data }: { data: ProjectType }) {
  return (
    <div className="card group relative h-56 rounded-2xl bg-steel/30 after:absolute after:inset-0 after:rounded-2xl after:opacity-0 after:transition-opacity after:content-['']">
      <div className="absolute inset-px z-10 cursor-default rounded-2xl bg-dark/75 p-5 text-pale backdrop-blur-md">
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
            <p className="mt-1 text-sm text-white/80">
              {new URL(data.url).host}
            </p>
          </div>
        </div>

        <p className="mt-5">{data.description}</p>

        <div className="absolute bottom-4">
          {data.tags.map((tag, idx) => (
            <span
              className=" mr-3 font-grotesk font-medium text-white/80"
              key={idx}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <Image
        src="/glow2.svg"
        alt=""
        fill
        className="!fixed -z-10 -translate-x-2 translate-y-3 scale-150 overflow-hidden opacity-0 duration-500 ease-in-out group-hover:opacity-100 md:!absolute"
      />
    </div>
  )
}
