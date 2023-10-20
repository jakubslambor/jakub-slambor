import Link from 'next/link'
import { PropsWithChildren } from 'react'

export default function FooterLink({
  href,
  children,
}: PropsWithChildren<{ href: string }>) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="hover:/90 transition-colors"
    >
      {children}
    </Link>
  )
}
