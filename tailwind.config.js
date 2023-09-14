/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}',],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'negro': '#000100',
        'amarillo': '#FFFF00',
        'verde': '#44AA00',
      },
    },
  },
  variants: {},
  plugins: [require('daisyui')],
};
