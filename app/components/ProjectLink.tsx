import Link from 'next/link'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  href: string
}>

export default function ProjectLink({ children, href }: Props) {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noreferrer'
      className='underline underline-offset-4 decoration-white/70 hover:decoration-white/90 transition-colors'>
      @{children}
    </Link>
  )
}
