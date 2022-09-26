/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },

      colors: {
        purple: '#2D1443',
        pink: '#972D4F',
        cream: '#fefae0',
        cream1: '#fcf2af',
        bg: '#f4f4f4',
      },

      backgroundImage: {
        'hero-pattern': 'url(/img/wave.svg)',
      },
    },
  },
  plugins: [],
};
