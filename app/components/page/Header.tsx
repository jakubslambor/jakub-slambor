'use client'

import { useEffect, useState } from 'react'
import CommandMenu from '../CommandMenu'

export default function Header() {
  const [open, setOpen] = useState(false)

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || (e.key === 'k' && e.metaKey)) {
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <header className="container fixed top-8 left-1/2 z-10 flex w-full -translate-x-1/2 justify-between">
        <div>{/* <h1>Jakub Slambor</h1> */}</div>

        <button
          className="block rounded-lg border border-steel/70 bg-gray/50 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition-colors duration-300 hover:border-steel hover:bg-gray/80"
          onClick={() => setOpen(true)}
        >
          <span className="inline-block -translate-x-1.5 rounded-md border border-steel/10 bg-gradient-to-tr from-steel/30 via-steel/60 to-steel/30 px-2 py-0.5">
            ⌘K
          </span>
          Navigation
        </button>
      </header>

      <CommandMenu open={open} setOpen={setOpen} />
    </>
  )
}
