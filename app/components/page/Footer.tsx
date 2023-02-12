import FooterLink from './FooterLink'

export default function Footer() {
  return (
    <footer className="container fixed left-1/2 bottom-0 -translate-x-1/2 cursor-default font-grotesk font-semibold uppercase text-pale">
      <p className="mb-4">Let&apos;s connect</p>

      <hr className="border border-white/70" />

      <div className="flex justify-between py-6 backdrop-blur-2xl">
        <nav className="flex gap-x-10 text-sm">
          <FooterLink href="mailto:jakub.slambor@gmail.com">Email</FooterLink>
          <FooterLink href="https://github.com/mjamesCZ">GitHub</FooterLink>
          <FooterLink href="https://twitter.com/slambor_jakub">
            Twitter
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/jakub-slambor/">
            LinkedIn
          </FooterLink>
        </nav>

        <p>
          PRG{' '}
          <span className="font-serif font-normal">
            {new Date().getFullYear()}
          </span>
        </p>
      </div>
    </footer>
  )
}
