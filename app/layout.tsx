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
  // Basic
  title: {
    default: 'Jakub Šlambor',
    template: '%s – Jakub Šlambor',
  },
  description:
    'Crafting interfaces @goout and @herohero, building new worlds @formastudios',
  creator: 'Jakub Šlambor',
  manifest: 'https://nextjs.org/manifest.json',

  // Icons
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },

  // Open Graph
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'],
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
