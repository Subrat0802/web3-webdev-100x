/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        red:{
          500: "blue"
        }
      },
      screens:{
        sm:"450px",
        md:"640px",
        lg:"1080px"
      }
    },
  },
  plugins: [],
}

