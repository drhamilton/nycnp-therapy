const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "!./node_modules"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-amiri)', ...fontFamily.serif],
      },
      backgroundImage: {
        'hero': "url('/images/cover.jpg')"
      }
    },
  },
  plugins: [],
}
