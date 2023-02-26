import { dock } from '@/data/dock'
import Image from 'next/image'
import Link from 'next/link'

export default function Dock() {
  return (
    <div className="flex justify-center ">
      <div className="flex rounded-3xl border border-steel/70 bg-gray/50 p-1.5 backdrop-blur-xl">
        {dock.map((item, idx) => (
          <Link
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group relative origin-bottom px-[3px] transition-all duration-300 ease-in-out first:pl-0 last:pr-0 hover:scale-110 hover:px-1.5 first:hover:pl-[3px] last:hover:pr-[3px]"
            key={idx}
          >
            <Image
              src={`/dock/${item.name.replace(/\W+/g, '').toLowerCase()}.png`}
              alt={item.name}
              height={70}
              width={70}
            />

            <div className="pointer-events-none invisible absolute bottom-full left-1/2 z-10 mb-1 inline-block origin-bottom -translate-x-1/2 scale-95 select-none whitespace-nowrap rounded-lg border border-steel/50 bg-dark px-2 py-1 leading-none opacity-0 duration-300 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
              <span className="text-sm font-medium text-white">
                {item.name}
              </span>
              <div className="absolute -bottom-[5px] left-1/2 h-0 w-0 -translate-x-1/2 transform border-4 border-b-0 border-transparent border-t-dark" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
