/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'raleway':'raleway',
        'montserrat':'montserrat'
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}
