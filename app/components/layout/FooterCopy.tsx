import Clock from './Clock'

export default function FooterCopy({ className }: { className?: string }) {
  return (
    <div className={className ? className : ''}>
      <p className="mr-2">
        PRG{' '}
        <span className="font-serif font-normal italic">
          {new Date().getFullYear()}
        </span>
      </p>

      <Clock />
    </div>
  )
}
