'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import CommandMenu from '../CommandMenu'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen((open) => !open)
      }

      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const path = usePathname()
  const isHome = path === '/'

  return (
    <>
      <header
        className={`fixed top-0 z-20 w-full transition-[border] duration-300 ease-in-out ${
          !isHome && scrollTop > 0
            ? 'border-b-[1.5px] border-steel/70 bg-deep/70 backdrop-blur-3xl'
            : ''
        }`}
      >
        <div className="container flex items-start justify-between py-6 pb-5">
          <div>
            {!isHome && (
              <div className="group flex items-baseline text-2xl font-bold md:text-3xl">
                <Link href="/" className="">
                  <h1 className="select-none whitespace-nowrap text-white">
                    Jakub Šlambor
                  </h1>
                </Link>

                <span className="cursor-default font-grotesk capitalize text-steel opacity-90 transition-opacity duration-300 hover:!opacity-90 group-hover:opacity-70">
                  <span className="pl-1.5 pr-0.5 opacity-50 md:pl-2 md:pr-1">
                    /
                  </span>
                  {path.slice(1)}
                </span>
              </div>
            )}
          </div>

          <button
            className="block rounded-lg border border-steel/70 bg-gray/50 px-3 py-1.5 text-sm font-semibold uppercase text-white backdrop-blur transition-colors duration-300 hover:border-steel hover:bg-gray/80 md:py-1 md:tracking-wide"
            onClick={() => setOpen(true)}
          >
            <span className="hidden -translate-x-1.5 rounded-md border border-steel/10 bg-gradient-to-tr from-steel/30 via-steel/60 to-steel/30 px-2 py-0.5 md:inline-block">
              ⌘K
            </span>
            Menu
          </button>
        </div>
      </header>

      <CommandMenu open={open} setOpen={setOpen} />
    </>
  )
}
