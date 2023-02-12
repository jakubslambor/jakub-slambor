import { ReactNode } from 'react'
import { Newsreader } from '@next/font/google'
import localFont from '@next/font/local'
import './globals.css'
import Image from 'next/image'

const cabinetGrotesk = localFont({
  variable: '--font-cabinet-grotesk',
  src: './fonts/CabinetGrotesk-Variable.woff2',
})

const satoshi = localFont({
  variable: '--font-satoshi',
  src: './fonts/Satoshi-Variable.woff2',
})

const newsreader = Newsreader({
  variable: '--font-newsreader',
  weight: ['400'],
  style: ['italic'],
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${cabinetGrotesk.variable} ${satoshi.variable} bg-dark`}
    >
      <head />
      <body className="font-satoshi">
        <Image
          src="/grid.svg"
          alt=""
          className="!fixed -z-50 !h-auto max-h-none min-h-screen"
          fill
        />

        {children}

        <footer className="container fixed left-1/2 bottom-0 -translate-x-1/2 font-grotesk font-bold uppercase text-pale">
          <p className="mb-4">Let&apos;s connect</p>

          <hr className="border border-white/70" />

          <div className="flex justify-between py-6 backdrop-blur-2xl">
            <nav className="flex gap-x-10 text-sm">
              <a href="https://twitter.com/jakubslambor">Email</a>
              <a href="">GitHub</a>
              <a href="">Twitter</a>
              <a href="">LinkedIn</a>
            </nav>

            <p>
              PRG{' '}
              <span className="font-serif font-normal">
                {new Date().getFullYear()}
              </span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
