export default function Clock() {
  const time = new Date()

  // starting offsets
  const hours = time.getHours() * 15 + time.getMinutes() / 4
  const minutes = time.getMinutes() * 6 + time.getSeconds() / 10
  const seconds = time.getSeconds() * 6 + time.getMilliseconds() / 1000

  return (
    <div className="relative box-content h-5 w-5 rounded-full border border-pale">
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
  )
}
