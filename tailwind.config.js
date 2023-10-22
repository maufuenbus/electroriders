/** @type {import('tailwindcss').Config} */


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}',],
  darkMode: false,
  theme: {
    
    extend: {
      colors: {
        'negro': '#171717',
        'amarillo': '#FFFF00',
        'verde': '#44AA00',
        'fondo': '#171717'
      },
    },
  },
  variants: {},
  plugins: [require('daisyui')],
};
