import color from "tailwindcss/colors"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary:{
          DEFAULT: color.neutral[200],
          hover: color.neutral[300],
          border: color.neutral[400],
          text: color.neutral[700],
          dark: color.neutral[800],
          ["dark-hover"]: color.neutral[950]
        }
      }
    },
  },
  plugins: [],
}