import Image from 'next/image'
import { PropsWithChildren } from 'react'

export default function HeroSection({
  imageSrc,
  imageAlt,
  children,
}: PropsWithChildren<{ imageSrc: string; imageAlt: string }>) {
  return (
    <section className="relative mx-auto mt-32 max-w-4xl items-center gap-12 md:flex">
      <div className="relative mb-10 h-80 w-80 shrink-0 md:mb-0">
        <Image
          src="/glow.svg"
          alt=""
          fill
          priority
          className="pointer-events-none absolute translate-y-5 scale-150 select-none"
        />

        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="absolute inset-0 rounded-2xl shadow-lg"
        />
      </div>

      <div className="flex flex-col gap-y-8 font-medium text-pale antialiased">
        {children}
      </div>
    </section>
  )
}
