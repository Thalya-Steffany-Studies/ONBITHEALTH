const { hairlineWidth } = require('nativewind/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'brand-100': '#EEFBF3',
        'brand-300': '#79DCA6',
        'brand-500': '#43C481',
        'brand-800': '#0D472F'
      },
      fontFamily: {
        'be-vietnam': ["Be Vietnam Pro", 'serif']
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
};
