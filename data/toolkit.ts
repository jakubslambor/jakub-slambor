export type ToolkitItem = { name: string; url: string; description: string }
type ToolkitCategory = { name: string; items: ToolkitItem[] }

export const toolkit: ToolkitCategory[] = [
  {
    name: 'Gear',
    items: [
      {
        name: 'MacBook Air (M1, 2020)',
        url: 'https://www.apple.com/macbook-air/',
        description: 'My main machine',
      },
    ],
  },
  {
    name: 'Coding/Terminal',
    items: [
      {
        name: 'fish',
        url: 'https://fishshell.com/',
        description: 'A smart and user-friendly command line shell',
      },
      {
        name: 'Starship',
        url: 'https://starship.rs/',
        description:
          'The minimal, blazing-fast, and infinitely customizable prompt',
      },
      {
        name: 'Material Theme',
        url: 'https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme',
        description:
          'My VS Code theme, be sure to use with color palette Ocean',
      },
      {
        name: 'Material Icon Theme',
        url: 'https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme',
        description:
          'Material Design icons, not to be confused with Material Theme',
      },
      {
        name: 'Fira Code',
        url: 'https://github.com/tonsky/FiraCode',
        description: 'A beautiful monospaced font with programming ligatures',
      },
    ],
  },
  {
    name: 'Apps',
    items: [
      {
        name: 'CleanShot X',
        url: 'https://cleanshot.com/',
        description:
          'Never thought I’d pay for a screenshot tool, but here we are',
      },
      {
        name: 'Sleeve',
        url: 'https://sleeve.app/',
        description: 'Overlay showing me the music that’s currently playing',
      },
      {
        name: 'Bitwarden',
        url: 'https://bitwarden.com/',
        description: 'My password manager of choice',
      },
      {
        name: 'Postman',
        url: 'https://www.postman.com/',
        description: 'I use this for testing APIs',
      },
    ],
  },
  {
    name: 'Services',
    items: [
      {
        name: 'Vercel',
        url: 'https://vercel.com/',
        description: 'I host the frontend of my projects here',
      },
      {
        name: 'Railway',
        url: 'https://railway.app/',
        description: 'I host the backend, workers and database here',
      },
    ],
  },
  {
    name: 'Audio',
    items: [
      {
        name: 'AirPods Pro (2nd Gen)',
        url: 'https://www.apple.com/airpods-pro/',
        description: 'Not leaving home without them',
      },
      {
        name: 'Sony WH-1000XM4',
        url: 'https://www.sony.com/electronics/headband-headphones/wh-1000xm4',
        description:
          'My over-ear headphones for longer travel and work sessions',
      },
    ],
  },
]
