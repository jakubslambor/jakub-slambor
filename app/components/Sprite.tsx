'use client'

import Rive from '@rive-app/react-canvas'

export default function Sprite() {
  return (
    <Rive
      className="fixed inset-0 -right-[52%] -top-0 scale-125 -scale-x-125"
      src="../sprite.riv"
    />
  )
}
