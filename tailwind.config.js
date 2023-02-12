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
      'pop-out': 'popout 200ms ease-out forwards',
    },
    keyframes: {
      popout: {
        '0%': {
          opacity: 0,
          transform: 'scale(0.9) translateY(10px)',
        },
        '75%': {
          transform: 'scale(1.007)',
        },
        '100%': {
          opacity: 1,
          transform: 'scale(1)',
        },
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
