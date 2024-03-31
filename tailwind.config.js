/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width :{
        '97/100' :'97%'
      },
      dropShadow: {
        'custom': '0 0 5px rgb(210, 210, 210)',
      }
    },
  },
  plugins: [],
}

