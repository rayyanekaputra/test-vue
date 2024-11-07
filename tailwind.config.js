/** @type {import('tailwindcss').Config} */
export default {
  // apa file yang mau na liati tailwind
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Poppins', 'sans-serif']
      },
      gridTemplateColumns:{
        '70/30': '70% 28%'
      }
    },
  },
  plugins: [],
}

