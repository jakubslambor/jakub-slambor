const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      pale: '#F1F1F1',
      gray: '#32353A',
      steel: '#3D4656',
      dark: '#080808',
    },
    animation: {
      'text-grow': 'grow 2s ease-out forwards',
    },
    keyframes: {
      grow: {
        '0%': { fontWeight: '700' },
        '100%': { fontWeight: '200' },
      },
    },
    container: {
      center: true,
    },
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
