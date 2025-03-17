/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'selector',
  theme: {
    extend: {
      fontFamily:{
         sans: ["'PT Sans'", "sans-serif"], 
         poppins: ["'Poppins'", "sans-serif"], // Poppins
      },
      
    },
  },
  plugins: [],
}