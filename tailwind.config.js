const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: [
          'var(--font-cabinet-grotesk)',
          ...defaultTheme.fontFamily.sans,
        ],
        satoshi: ['var(--font-satoshi)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-newsreader)', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
