/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:
        {
          baseOrange: '#ffa400ff',
          baseLight: '#009ffdff',
          baseDeep: '#2a2a72ff',
          baseNight: '#232528ff',
          baseSky: '#eaf6ffff'
        },
      },
      fontFamily:{
        sans:['Roboto', 'sans-serif'],
      }
  },
  plugins: [],
}
