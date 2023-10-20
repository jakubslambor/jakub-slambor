'use client'

import { usePathname } from 'next/navigation'
import FooterCopy from './FooterCopy'
import FooterLink from './FooterLink'

export default function Footer() {
  const isHome = usePathname() === '/'

  return (
    <footer
      className={`container cursor-default font-grotesk font-semibold uppercase  ${
        isHome
          ? 'fixed bottom-0 left-1/2 -translate-x-1/2'
          : 'bg-gradient pt-20'
      }`}
    >
      <div className="flex justify-between">
        <p className="mb-4">Let&apos;s connect</p>
        <FooterCopy className="flex md:hidden" />
      </div>

      <hr className="border border-white/70" />

      <div className="flex justify-between py-6 md:backdrop-blur-2xl">
        <nav className="mf:justify-start flex w-full justify-between text-sm md:w-auto md:gap-x-10">
          <FooterLink href="mailto:jakub.slambor@gmail.com">Email</FooterLink>
          <FooterLink href="https://github.com/mjamesCZ">GitHub</FooterLink>
          <FooterLink href="https://twitter.com/slambor_jakub">
            Twitter
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/jakub-slambor/">
            LinkedIn
          </FooterLink>
        </nav>

        <FooterCopy className="hidden md:flex" />
      </div>
    </footer>
  )
}
