import { ReactNode } from 'react'
import { Newsreader } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Image from 'next/image'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'

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

export const metadata = {
  // General
  title: {
    default: 'Jakub Šlambor',
    template: '%s – Jakub Šlambor',
  },
  description:
    'Crafting interfaces @goout and @herohero, building new worlds @formastudios',
  creator: 'Jakub Šlambor',
  manifest: '/fav/site.webmanifest',
  themeColor: '#080808',

  // Icons
  icons: {
    icon: ['/fav/favicon-16x16.png', '/fav/favicon-32x32.png'],
    apple: '/fav/apple-touch-icon.png',
  },

  // Open Graph
  openGraph: {
    title: 'Jakub Šlambor',
    description:
      'Crafting interfaces @goout and @herohero, building new worlds @formastudios',
    url: 'https://jakubslambor.com',
    siteName: 'Jakub Šlambor',
    images: {
      url: '/og.png',
      width: 1200,
      height: 628,
    },
    locale: 'en-US',
    type: 'website',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Jakub Šlambor',
    description:
      'Crafting interfaces @goout and @herohero, building new worlds @formastudios',
    creator: '@slambor_jakub',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${cabinetGrotesk.variable} ${satoshi.variable}`}
    >
      <head />
      <body className="relative min-h-screen bg-dark font-satoshi">
        <Image
          src="/grid.svg"
          alt=""
          className="!fixed -z-50 !h-auto select-none"
          fill
          priority
        />

        <Header />
        <main>{children}</main>
        <Footer />

        <Image
          src="/grain.png"
          alt=""
          className="pointer-events-none !fixed z-10 select-none mix-blend-overlay"
          fill
          priority
        />
        <Image
          src="/grain.png"
          alt=""
          className="pointer-events-none !fixed z-20 select-none mix-blend-overlay"
          fill
          priority
        />
      </body>
    </html>
  )
}
