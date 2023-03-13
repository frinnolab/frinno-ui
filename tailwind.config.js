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
          coreSky: '#CFD8DC',
          coreBase: '#607D8B',
          coreAlert: '#D64045',
          coreDeepSky: '#455A64',
          coreDeepBase: '#1D3354',
        },
      },
      fontFamily:{
        sans:['Roboto', 'sans-serif'],
      }
  },
  plugins: [],
}
