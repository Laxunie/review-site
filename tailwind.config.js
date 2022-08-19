/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        white: '#FFFFFF',
        dark_grey: '#474747',
        mint: '#00754B',
        turquoise: '#00C896'
      }
    },
  },
  plugins: [],
}
