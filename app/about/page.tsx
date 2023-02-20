import { experience } from '@/data/experience'
import { projects } from '@/data/projects'
import Image from 'next/image'
import Experience from '../components/about/Experience'
import Project from '../components/about/Project'

export default function About() {
  return (
    <div className="container pt-32">
      <section className="relative items-center gap-12 md:flex lg:mx-12">
        <div className="relative h-80 w-80 shrink-0">
          <Image
            src="glow.svg"
            alt=""
            fill
            priority
            className="absolute translate-y-5 scale-150"
          />

          <Image
            src="/profile.jpg"
            alt="Jakub Šlambor"
            fill
            priority
            className="absolute inset-0 rounded-2xl shadow-lg"
          />
        </div>

        <div className="max-w-xl font-medium text-pale">
          <p className="pb-8">
            Non mollit amet culpa proident nisi ut. Proident aliqua in excepteur
            laborum amet incididunt duis ut sint. Occaecat voluptate aute do do
            veniam mollit voluptate incididunt ut ullamco magna adipisicing
            ullamco. Anim ipsum sit sint eiusmod culpa enim nostrud Lorem anim
            est est quis proident.
          </p>

          <p>
            Non mollit amet culpa proident nisi ut. Proident aliqua in excepteur
            laborum amet incididunt duis ut sint. Occaecat voluptate aute do do
            veniam mollit voluptate incididunt ut ullamco magna adipisicing
            ullamco. Anim ipsum sit sint eiusmod culpa enim nostrud Lorem anim
            est est quis proident.
          </p>
        </div>
      </section>

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
