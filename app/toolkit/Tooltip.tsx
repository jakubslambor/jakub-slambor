import { PropsWithChildren } from 'react'

export default function Tooltip({
  direction = 'top',
  isIntersecting,
  children,
}: PropsWithChildren<{
  direction?: 'top' | 'right'
  isIntersecting?: boolean
}>) {
  const tooltipClass = {
    top: 'bottom-full left-1/2 mb-1 origin-bottom -translate-x-1/2',
    right: 'left-full top-1/2 ml-3 origin-left -translate-y-1/2',
  }

  const arrowClass = {
    top: '-bottom-[5px] left-1/2 -translate-x-1/2 border-b-0 border-t-steel/40',
    right: '-left-[5px] top-1/2 -translate-y-1/2 border-l-0 border-r-steel/40',
  }

  return (
    <div
      className={`pointer-events-none invisible absolute z-10 inline-block scale-95 select-none whitespace-nowrap rounded-lg border border-steel/50 bg-dark px-2 py-1 leading-none opacity-0 duration-300 sm:group-hover:visible sm:group-hover:scale-100 sm:group-hover:opacity-100 ${
        isIntersecting ? '!visible scale-100 !opacity-100' : ''
      } ${tooltipClass[direction]}`}
    >
      <span className="text-sm font-medium text-white">{children}</span>
      <div
        className={`absolute h-0 w-0 transform border-4 border-transparent ${arrowClass[direction]}`}
      />
    </div>
  )
}
