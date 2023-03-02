import { PropsWithChildren } from 'react'

export default function HeroHighlight({ children }: PropsWithChildren) {
  return (
    <span className="font-serif text-lg italic text-white/80">{children}</span>
  )
}
