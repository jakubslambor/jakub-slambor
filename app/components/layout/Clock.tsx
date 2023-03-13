import { useEffect, useState } from 'react'

export default function Clock() {
  const [time, setTime] = useState(new Date(0))

  useEffect(() => {
    setTime(new Date())
  }, [])

  const hours = (time.getHours() % 12) * 30 + time.getMinutes() / 2
  const minutes = time.getMinutes() * 6 + time.getSeconds() / 10
  const seconds = time.getSeconds() * 6 + time.getMilliseconds() / 1000

  console.log(hours)

  return (
    <div className="relative box-content h-5 w-5 rounded-full border border-pale">
      <div
        className={`transition-opacity duration-300 ${
          time.getFullYear() === 1970 ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="absolute inset-0" style={{ rotate: `${seconds}deg` }}>
          <div className="absolute left-1/2 h-1/2 origin-bottom animate-rotate-sec border-l-[0.5px] border-pale" />
        </div>

        <div
          className="absolute inset-0 -translate-x-px"
          style={{ rotate: `${minutes}deg` }}
        >
          <div className="absolute left-1/2 h-1/2 origin-bottom scale-90 animate-rotate-min border-l border-pale" />
        </div>

        <div
          className="absolute inset-0 -translate-x-px"
          style={{ rotate: `${hours}deg` }}
        >
          <div className="-ranslate-x-px absolute left-1/2 h-1/2 origin-bottom scale-50 animate-rotate-hr border border-pale" />
        </div>
      </div>
    </div>
  )
}
