const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: colors.white,
      silver: '#85888E',
      gray: '#585B64',
      dark: '#080808',
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      sans: ['var(--font-oracle)', ...defaultTheme.fontFamily.sans],
    },
    animation: {
      'pop-out': 'popout 200ms ease-out forwards',
      'rotate-sec': 'rotate 60s linear infinite',
      'rotate-min': 'rotate 3600s linear infinite',
      'rotate-hr': 'rotate 86400s linear infinite',
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
      rotate: {
        '0%': {
          rotate: '0deg',
        },
        '100%': {
          rotate: '360deg',
        },
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      backgroundImage: {
        gradient:
          'linear-gradient(90deg, transparent 0%, rgb(8 8 8 / 60%) 50%, transparent 100%)',
      },
    },
  },
}
