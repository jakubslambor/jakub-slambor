import { experience } from '@/data/experience'
import { projects } from '@/data/projects'
import Image from 'next/image'
import HeroSection from '../components/HeroSection'
import Experience from './Experience'
import Project from './Project'

export default function About() {
  return (
    <div className="container pt-32">
      <HeroSection imageSrc="/profile.jpg" imageAlt="Jakub Šlambor">
        <p>
          Non mollit amet culpa proident nisi ut. Proident aliqua in excepteur
          laborum amet incididunt duis ut sint. Occaecat voluptate aute do do
          veniam mollit voluptate incididunt ut ullamco magna adipisicing
          ullamco. Anim ipsum sit sint eiusmod culpa enim nostrud Lorem anim est
          est quis proident.
        </p>

        <p>
          Non mollit amet culpa proident nisi ut. Proident aliqua in excepteur
          laborum amet incididunt duis ut sint. Occaecat voluptate aute do do
          veniam mollit voluptate incididunt ut ullamco magna adipisicing
          ullamco. Anim ipsum sit sint eiusmod culpa enim nostrud Lorem anim est
          est quis proident.
        </p>
      </HeroSection>

      <section className="mt-16">
        <div className="flex items-baseline border-b-[1.5px] border-white/70 pb-2 font-serif text-white/70">
          <h2 className="flex-1 flex-grow-[1.15] font-grotesk text-2xl font-bold uppercase text-white">
            Experience
          </h2>
          <p className="hidden flex-1 md:block">role</p>
          <p className="hidden flex-1 flex-grow-[1.35] md:block">
            years active
          </p>
          <p className="hidden flex-1 md:block">location</p>
        </div>

        {experience.map((item, idx) => (
          <Experience key={idx} data={item} />
        ))}
      </section>

      <section className="mt-16">
        <h2 className="mb-6 border-b-[1.5px] border-white/70 pb-2 font-grotesk text-2xl font-bold uppercase text-white">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, idx) => (
            <Project key={idx} data={item} />
          ))}
        </div>
      </section>
    </div>
  )
}
