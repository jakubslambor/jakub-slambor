'use client'

import { projects } from '~/data/projects'
import { MouseEvent } from 'react'
import Project from './Project'

export default function Projects() {
  const handleMouseMove = (e: MouseEvent) => {
    e.currentTarget.querySelectorAll<HTMLElement>('.card').forEach((card) => {
      const x = e.clientX - card.getBoundingClientRect().left
      const y = e.clientY - card.getBoundingClientRect().top

      card.style.setProperty('--x', `${x}px`)
      card.style.setProperty('--y', `${y}px`)
    })
  }

  return (
    <div
      className="wrapper grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      onMouseMove={(e) => handleMouseMove(e)}
    >
      {projects.map((item, idx) => (
        <Project key={idx} data={item} />
      ))}
    </div>
  )
}
