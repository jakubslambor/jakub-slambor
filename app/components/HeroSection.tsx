import Image from 'next/image'
import { PropsWithChildren } from 'react'

export default function HeroSection({
  imageSrc,
  imageAlt,
  children,
}: PropsWithChildren<{ imageSrc: string; imageAlt: string }>) {
  return (
    <section className="relative mx-auto max-w-4xl items-center gap-12 pt-32 md:flex">
      <div className="relative mb-10 h-80 w-80 shrink-0 md:mb-0">
        <Image
          src="/glow.svg"
          alt=""
          fill
          priority
          className="pointer-events-none absolute max-w-[75vw] translate-y-5 scale-150 select-none"
        />

        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="absolute inset-0 rounded-2xl shadow-lg"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>

      <div className="flex flex-col gap-y-8 font-medium text-pale antialiased">
        {children}
      </div>
    </section>
  )
}
