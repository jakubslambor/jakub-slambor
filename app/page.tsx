import ProjectLink from './components/ProjectLink'
import Sprite from './components/Sprite'

export default function Home() {
  return (
    <main>
      <Sprite />

      <div className="container relative cursor-default">
        <button>Navigation</button>

        <h1 className="mb-2 text-[6.75rem] font-bold leading-tight text-white transition-all duration-[1.4s] ease-in-out hover:font-semibold">
          Jakub Šlambor
        </h1>

        <p className="max-w-lg font-grotesk text-2xl font-bold text-pale">
          Crafting interfaces{' '}
          <ProjectLink href="https://goout.net">goout</ProjectLink> and{' '}
          <ProjectLink href="https://herohero.co">herohero</ProjectLink>,
          building new worlds{' '}
          <ProjectLink href="https://formastudios.dev">
            formastudios
          </ProjectLink>
        </p>
      </div>
    </main>
  )
}
