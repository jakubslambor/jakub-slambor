export type Project = {
  name: string
  url: string
  favicon: string
  description: string
  tags: string[]
}

export const projects: Project[] = [
  {
    name: 'jsem v obraze chatbot',
    url: 'https://telegram.org/',
    favicon: '/projects/jsemvobraze.png',
    description:
      'Breaking news telegram chatbot which aggregates, clusters and machine-translates news from multiple sources.',
    tags: ['AI/ML', 'NLP', 'Python'],
  },
  {
    name: 'jsem v obraze',
    url: 'https://jsemvobraze.com/',
    favicon: '/projects/jsemvobraze.png',
    description:
      'Landing page and stripe-powered merch store for the popular instagram profile jsem v obraze.',
    tags: ['Next.js', 'Stripe', 'Ecommerce'],
  },
  {
    name: 'Advent of Code 2022',
    url: 'https://github.com/mjamesCZ/advent-of-code',
    favicon: '/projects/advent.png',
    description:
      'My solutions to the Advent of Code 2022. Written in TypeScript with Deno runtime.',
    tags: ['Coding', 'Challenge', 'Algorithms'],
  },
  {
    name: 'AZUR grup Client portal',
    url: 'https://azur-amber.vercel.app/',
    favicon: '/projects/azur.png',
    description:
      'Client portal for AZUR grup, a real estate development company.',
    tags: ['Next.js', 'SWR', 'Strapi'],
  },
  {
    name: 'marielli studio',
    url: 'https://www.mariellistudio.cz/',
    favicon: '/projects/marielli.png',
    description:
      'Website for a local beauty studio. Built with Next.js and Strapi.',
    tags: ['Next.js', 'Strapi', 'Tailwind'],
  },
]
