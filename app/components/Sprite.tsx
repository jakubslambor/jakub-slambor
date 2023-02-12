'use client'

import Rive from '@rive-app/react-canvas'

export default function Sprite() {
  return (
    <Rive
      className="fixed inset-0 -left-40 -rotate-[13.3deg] scale-150"
      src="../sprite.riv"
    />
  )
}
