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
          baseSky: '#eaf6ffff',
          coreSky: '#E9FFF9',
          coreBase: '#9ED8DB',
          coreAlert: '#D64045',
          coreDeepSky: '#467599',
          coreDeepBase: '#1D3354',
        },
      },
      fontFamily:{
        sans:['Roboto', 'sans-serif'],
      }
  },
  plugins: [],
}
