import { ReactNode } from 'react'
import localFont from 'next/font/local'
import './globals.css'
import Image from 'next/image'
import Header from '~/app/components/layout/Header'
import Footer from '~/app/components/layout/Footer'

const oracle = localFont({
  src: './fonts/ABC-Oracle-Variable.woff2',
  display: 'swap',
  variable: '--font-oracle',
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
    images: '/og.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={oracle.variable}>
      <head />
      <body className="relative min-h-screen bg-dark text-white">
        <Image
          src="/grid.svg"
          alt=""
          className="!fixed -z-50 -rotate-6 select-none object-cover blur-[1px]"
          fill
          priority
        />

        <Header />
        <main>{children}</main>
        <Footer />

        <Image
          src="/grain.png"
          alt=""
          className="pointer-events-none !fixed z-10 select-none object-cover mix-blend-overlay"
          fill
          priority
        />
        <Image
          src="/grain.png"
          alt=""
          className="pointer-events-none !fixed z-20 select-none object-cover mix-blend-overlay"
          fill
          priority
        />
      </body>
    </html>
  )
}
