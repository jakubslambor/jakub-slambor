'use client'

import Rive from '@rive-app/react-canvas'

export default function Sprite() {
  return (
    <Rive
      className='fixed inset-0 -rotate-[13.3deg] scale-150 -left-40'
      src='../sprite.riv'
    />
  )
}
