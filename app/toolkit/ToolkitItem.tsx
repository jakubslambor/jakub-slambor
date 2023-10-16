import { ToolkitItem } from '~/data/toolkit'
import Link from 'next/link'

export default function ToolkitItemComponent({ item }: { item: ToolkitItem }) {
  return (
    <p className="mb-2">
      <Link
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="mr-1 text-pale underline decoration-white/70 underline-offset-4 transition-colors hover:decoration-white/90"
      >
        {item.name}
      </Link>

      <span className="text-white/70">– {item.description}</span>
    </p>
  )
}
