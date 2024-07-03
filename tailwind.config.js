/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
   
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'h1': {
          color: '#4a6870',
          fontWeight: 'bold',
          fontSize: '2em'
        },
        'h2': {
          color: '#567b84',
        },
        'h3': {
          color: '#71979f',
        },
        'h4': {
          color: '#8aacb2',
        },
        'h5': {
          color: '#c7d7da',
        },
        'h6': {
          color: '#71979f',
        },
        'p': {
          color: '#4a6870',
          fontSize: '1.2em'
        }
      });
    },
  ],
}
