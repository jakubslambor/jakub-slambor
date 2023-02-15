'use client'

import Rive from '@rive-app/react-canvas'

export default function Sprite() {
  return (
    <Rive
      className="fixed inset-0 -left-28 -top-20 rotate-[8deg] scale-[1.7] md:-left-40 md:-rotate-[13.3deg] md:scale-150"
      src="../sprite.riv"
    />
  )
}
