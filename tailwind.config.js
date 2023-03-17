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
          frnLight:'#F7F7F7',
          frnBase:'#051726',
          frnHot:'#F13A2B',
          frnDark:'#2C2D34',
          frnBlack:'#00000',
          frnAccent:'#89778E'
        },
      },
      fontFamily:{
        sans:['Roboto', 'sans-serif'],
      }
  },
  plugins: [],
}
