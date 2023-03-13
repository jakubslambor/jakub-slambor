'use client'

import { DockEntry } from '@/data/dock'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import useIntersectionObserver from '../utils/intersection-observer'
import Tooltip from './Tooltip'

export default function DockItem({ item }: { item: DockEntry }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    rootMargin: '-50% 0px -50% 0px',
  })

  const [isMobile, setIsMobile] = useState(false)
  setIsMobile(window.innerWidth < 640)

  return (
    <Link
      ref={ref as any}
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className={`group relative transition-all duration-300 ease-in-out sm:origin-bottom sm:scale-100 sm:px-[3px] sm:first:pl-0 sm:last:pr-0 sm:hover:scale-110 sm:hover:px-1.5 sm:first:hover:pl-[3px] sm:last:hover:pr-[3px] ${
        entry?.isIntersecting ? 'scale-110' : ''
      }`}
    >
      <Image
        src={`/dock/${item.name.replace(/\W+/g, '').toLowerCase()}.png`}
        alt={item.name}
        height={70}
        width={70}
      />

      <Tooltip
        direction={isMobile ? 'right' : 'top'}
        isIntersecting={isMobile && entry?.isIntersecting}
      >
        {item.name}
      </Tooltip>
    </Link>
  )
}
