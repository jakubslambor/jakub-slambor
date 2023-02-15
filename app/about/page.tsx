import Image from 'next/image'

export default function About() {
  return (
    <div className="container pt-32">
      <section className="relative flex items-center gap-x-10">
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

      <section className="mt-16"></section>
    </div>
  )
}
