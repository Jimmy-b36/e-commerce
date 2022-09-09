/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: { max: '428px' },
      sm: { min: '428px', max: '640px' },
      md: { min: '640px', max: '768px' },
      lg: { min: '768px', max: '1024px' },
      xl: { min: '1024px' },
    },
    extend: {
      fontFamily: { urbanist: ['Urbanist', 'sans-serif'] },
    },
  },
  daisyui: {
    themes: ['autumn'],
  },
  plugins: [require('daisyui')],
};
