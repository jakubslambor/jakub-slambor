import { ReactNode } from 'react'
import { Newsreader } from '@next/font/google'
import localFont from '@next/font/local'
import './globals.css'
import Image from 'next/image'
import Header from '@/app/components/page/Header'
import Footer from '@/app/components/page/Footer'

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
      className={`${newsreader.variable} ${cabinetGrotesk.variable} ${satoshi.variable}`}
    >
      <head />
      <body className="min-h-screen bg-dark bg-gradient-to-t from-dark to-[#09121c] font-satoshi">
        <Image
          src="/grid.svg"
          alt=""
          className="!fixed -z-50 !h-auto max-h-none min-h-screen"
          fill
        />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
