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
      deep: '#09121C',
      dark: '#080808',
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
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        xl: '3rem',
      },
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
}
