/** @type {import('tailwindcss').Config} */
//#2563eb the natural home
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    fontFamily:{
    rubik:['Rubik','sans-serif'],
    'rubik-bold':['Rubik-Bold','sans-serif']
    },
    extend: {
      colors:{
      dark:"#121212",
      home:"#2563eb",
      icon:'#202020'
      }
    },
  },
  plugins: [],
}