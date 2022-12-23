/** @type {import('tailwindcss').Config} */
module.exports = {
  content:['./*.html'],
  theme: {
    screens: {
      sm : '480px',
      md : '768px',
      lg : '976px',
      xl : '1440px'
    },
    extend: {
      colors: {
        backgroundBlack: '#0A0A0D',
        gradient: 'linear-gradient(to right, #F06844, #EE4C54, #D45E95, #9C6CA6, #6583C1);'
         }
    },
  },
  plugins: [],
}
