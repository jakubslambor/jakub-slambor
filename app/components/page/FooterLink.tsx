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
      className="transition-colors hover:text-pale/90"
    >
      {children}
    </Link>
  )
}
