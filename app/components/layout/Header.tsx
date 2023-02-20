'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import CommandMenu from '../CommandMenu'

export default function Header() {
  const [open, setOpen] = useState(false)

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

  const isHome = usePathname() === '/'

  return (
    <>
      <header
        className={`fixed top-0 z-10 w-full ${
          !isHome ? 'bg-deep/70 backdrop-blur-2xl' : ''
        }`}
      >
        <div className="container">
          <div
            className={`flex items-start justify-between pt-8 pb-6 ${
              !isHome ? 'border-b-2 border-white/70' : ''
            }`}
          >
            <div>
              {!isHome && (
                <Link href="/">
                  <h1 className="text-2xl font-bold text-white md:text-4xl">
                    Jakub Šlambor
                  </h1>
                </Link>
              )}
            </div>

            <button
              className="block rounded-lg border border-steel/70 bg-gray/50 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition-colors duration-300 hover:border-steel hover:bg-gray/80"
              onClick={() => setOpen(true)}
            >
              <span className="inline-block -translate-x-1.5 rounded-md border border-steel/10 bg-gradient-to-tr from-steel/30 via-steel/60 to-steel/30 px-2 py-0.5">
                ⌘K
              </span>
              Navigation
            </button>
          </div>
        </div>
      </header>

      <CommandMenu open={open} setOpen={setOpen} />
    </>
  )
}
