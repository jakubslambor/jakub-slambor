import Image from 'next/image'
import { PropsWithChildren } from 'react'

export default function HeroSection({
  imageSrc,
  imageAlt,
  children,
}: PropsWithChildren<{ imageSrc: string; imageAlt: string }>) {
  return (
    <section className="relative items-center gap-12 md:flex lg:mx-12">
      <div className="relative h-80 w-80 shrink-0">
        <Image
          src="/glow.svg"
          alt=""
          fill
          priority
          className="absolute translate-y-5 scale-150"
        />

        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="absolute inset-0 rounded-2xl shadow-lg"
        />
      </div>

      <div className="flex max-w-xl flex-col gap-y-8 font-medium text-pale">
        {children}
      </div>
    </section>
  )
}
