export type Experience = {
  company: string
  url: string
  role: string
  location: string
  startDate: Date
  endDate?: Date
}

// add new experience to the top of the array to keep the desired order

export const experience: Experience[] = [
  {
    company: 'forma studios',
    url: 'https://formastudios.dev/',
    role: 'Founder',
    location: 'Prague, CZ',
    startDate: new Date('2023-03-01'),
  },
  {
    company: 'Herohero',
    url: 'https://herohero.co/',
    role: 'Frontend Lead',
    location: 'Prague, CZ',
    startDate: new Date('2023-03-01'),
  },
  {
    company: 'GoOut',
    url: 'https://goout.net/',
    role: 'Frontend Developer',
    location: 'Prague, CZ',
    startDate: new Date('2021-09-13'),
  },
  {
    company: 'FRAME by FRAME',
    url: 'https://www.youtube.com/@framebyframeproductions7323/',
    role: 'Filmmaker',
    location: 'Mladá Boleslav, CZ',
    startDate: new Date('2016-05-06'),
    endDate: new Date('2020-02-22'),
  },
]
