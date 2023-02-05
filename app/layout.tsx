import { ReactNode } from 'react'
import { Newsreader } from '@next/font/google'
import localFont from '@next/font/local'
import './globals.css'

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
      lang='en'
      className={`${newsreader.variable} ${cabinetGrotesk.variable} ${satoshi.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  )
}
