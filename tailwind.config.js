const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: { '!': true },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      textBlack: '#000000',
      textBorder: '#CBCBCB',
      textGray: '#F5F5F5',
      videoBg: '#FFFFFF',
      primary: '#528075',
      primaryDark: '#3D5A4A',
    },
    maxWidth: {
      '8xl': '1536px',
    },
    fontFamily: {
      'app-regular': 'DMSans Regular',
      'app-medium': 'DMSans Medium',
      'app-bold': 'DMSans Bold',
    },
    extend: {
      boxShadow: {
        sideBar: '0 0px 190px 200px rgba(0, 0, 0, 0.8)',
      },
      colors: {
        primary: '#528075',
      },
    },
  },
  plugins: [],
};
