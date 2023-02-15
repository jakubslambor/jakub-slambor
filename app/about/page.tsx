import { experience } from '@/data/experience'
import Image from 'next/image'
import Experience from '../components/Experience'

export default function About() {
  return (
    <div className="container pt-32">
      <section className="relative flex items-center gap-x-12">
        <Image
          src="/profile.jpg"
          alt="Jakub Šlambor"
          width={350}
          height={350}
          className="rounded-3xl grayscale before:absolute before:inset-0 before:z-50 before:block before:h-20 before:w-20 before:content-[url('/glow.svg')]"
        />

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
          <h2 className="flex-1 font-grotesk text-2xl font-bold uppercase text-white">
            Experience
          </h2>
          <p className="flex-1">years active</p>
          <p className="flex-1">role</p>
          <p className="flex-1">location</p>
        </div>

        {experience.reverse().map((item, idx) => (
          <Experience key={idx} data={item} />
        ))}
      </section>

      <section className="mt-16"></section>
    </div>
  )
}
