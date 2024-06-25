/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'ijoTeal' : '#005C4E',
        'putih' : '#E8EDF1'
      },
      backgroundColor : {
        'BgBlue' : 'C:/Users/Master/Documents/Mangcoding Web/website-mangstore/mini-website/src/assets/image/bg-blue.svg',
      },
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

