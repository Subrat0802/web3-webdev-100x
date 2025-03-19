/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'selector',
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'Arial', 'sans-serif'],
      },
      colors: {
        customDark: 'rgba(2, 6, 12, 0.92)',
      },
      
    },
  },
  plugins: [],
}