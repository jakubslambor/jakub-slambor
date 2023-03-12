import { experience } from '@/data/experience'
import Link from 'next/link'
import HeroHighlight from '../components/HeroHighlight'
import HeroSection from '../components/HeroSection'
import PageSection from '../components/PageSection'
import Experience from './Experience'
import Projects from './Projects'

export const metadata = {
  title: 'About',
}

export default function About() {
  return (
    <div className="container">
      <HeroSection imageSrc="/profile.jpg" imageAlt="Jakub Šlambor">
        <p>
          Hey! I’m Jakub. I’m a{' '}
          <HeroHighlight>frontend developer</HeroHighlight> with an eye for
          design based in Prague. Currently, I’m building sleek and accessible
          interfaces at GoOut and Herohero.
        </p>
        {/* TODO: uncomment when I have a game to show */}
        {/* <p>
          I’m also an aspiring game developer. You can follow my progress of
          making <HeroHighlight>Redacted</HeroHighlight> on{' '}
          <Link
            href="https://www.youtube.com/@formastudios"
            className="text-white opacity-80 transition-opacity hover:opacity-100"
          >
            YouTube
          </Link>
          , or support me on{' '}
          <Link
            href="https://www.youtube.com/@formastudios"
            className="text-white opacity-80 transition-opacity hover:opacity-100"
          >
            Herohero
          </Link>
          .
        </p> */}
        <p>
          When I’m not working, I like running, drinking coffee, and listening
          to{' '}
          <Link
            href="/toolkit"
            className="opacity-[85%] transition-opacity hover:opacity-100"
          >
            great music
          </Link>
          .
        </p>
      </HeroSection>

      <PageSection
        title="Experience"
        columns={
          <>
            <p className="hidden flex-1 font-serif italic text-white/80 md:block">
              role
            </p>
            <p className="hidden flex-1 flex-grow-[1.35] font-serif italic text-white/80 md:block">
              years active
            </p>
            <p className="hidden flex-1 font-serif italic text-white/80 md:block">
              location
            </p>
          </>
        }
      >
        <div className="-mt-6">
          {experience.map((item, idx) => (
            <Experience data={item} key={idx} />
          ))}
        </div>
      </PageSection>

      <PageSection title="Projects">
        <Projects />
      </PageSection>
    </div>
  )
}
