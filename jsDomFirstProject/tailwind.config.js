/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.html'
  ],
  theme: {
    extend: {
      colors:{
        'starbuckgreen' : '#166534',
        'starbuckpink': '#D7B4AD',
        'starbuckpurple': '#A82180',
      }
    },
  },
  plugins: [],
}

