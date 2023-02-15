import ProjectLink from './components/ProjectLink'
import Sprite from './components/Sprite'

export default function Home() {
  return (
    <>
      <Sprite />

      <div className="container relative cursor-default">
        <h1 className="mb-6 mt-56 inline-block text-6xl font-bold leading-[1.15] text-white drop-shadow-xl transition-[font-weight] duration-[1.4s] hover:font-semibold md:mb-2 md:text-8xl md:leading-tight">
          Jakub Šlambor
        </h1>

        <p className="max-w-lg font-grotesk text-xl font-bold leading-snug text-pale md:text-2xl">
          Crafting interfaces{' '}
          <ProjectLink href="https://goout.net">goout</ProjectLink> and{' '}
          <ProjectLink href="https://herohero.co">herohero</ProjectLink>,
          building new worlds{' '}
          <ProjectLink href="https://formastudios.dev">
            formastudios
          </ProjectLink>
        </p>
      </div>
    </>
  )
}
