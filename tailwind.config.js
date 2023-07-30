/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      transitionProperty:{
        height:'height'
      },
      animation: {
        fadeIn: 'fadeIn ease-in-out 0.25s',
        fadeOut: 'fadeOut ease-in-out 1s',
      },
      keyframes:{
        fadeIn: {
          '0%': {transform: 'scaleY(0)', opacity: '0%'},
          '10%': {transform: 'scaleY(0.2)', opacity: '0%'},
          '20%': {transform: 'scaleY(0.4)', opacity: '0%'},
          '30%': {transform: 'scaleY(0.6)', opacity: '0%'},
          '40%': {transform: 'scaleY(0.8)', opacity: '0%'},
          '50%': {opacity: '0%', transform: 'scaleY(1)'},
          '60%': {opacity: '20%'},
          '70%': {opacity: '40%'},
          '80%': {opacity: '60%'},
          '90%': {opacity: '80%'},
          '100%': {opacity: '100%'}
        },
        fadeOut: {
          '0%': {transform: 'scale(1)', opacity: '100%' },
          '50%': {transform: 'scale(0.5)', opacity: '50%'},
          '100%': {transform: 'scale(1)', opacity: '0%'}
        }
      }
    },
  },
  plugins: [],
}

