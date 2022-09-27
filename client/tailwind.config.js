/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  safelist: [
    '-translate-x-[100%]',
    '-translate-x-[200%]',
    '-translate-x-[300%]',
  ],
  theme: {
    screens: {
      xs: { max: '428px' },
      sm: { min: '428px', max: '640px' },
      md: { min: '640px', max: '768px' },
      lg: { min: '768px', max: '811px' },
      xl: { min: '811px', max: '1025px' },
      '2xl': { min: '1025px' },
    },
    extend: {
      fontSize: {
        heading: '70px',
      },
      colors: {
        container: '#ffe4e6',
      },
      dropShadow: {
        'my-card': ['20px 20px 20px #bebebe', '-20px -20px 20px #ffffff'],
      },
      fontFamily: { urbanist: ['Urbanist', 'sans-serif'] },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#EF9995',

          secondary: '#A4CBB4',

          accent: '#fed7aa',

          neutral: '#4b5563',

          'base-100': '#f3f4f6',

          info: '#2463EB',

          success: '#16A249',

          warning: '#DB7706',

          error: '#DC2828',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('tw-elements/dist/plugin')],
};
