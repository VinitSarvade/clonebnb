/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mon: ['mont-regular', 'sans-serif'],
        'mon-sb': ['mont-semibold', 'sans-serif'],
        'mon-m': ['mont-medium', 'sans-serif'],
        'mon-l': ['mont-light', 'sans-serif'],
      },
      colors: {
        primary: '#FF5A5F',
        darkGrey: '#484848',
        lightGrey: '#767676',
      },
    },
  },
  plugins: [],
};
