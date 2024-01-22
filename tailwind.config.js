/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bluebg": "#242B3C",
        "blueborder": "#62a8fe",
        "bluetext": "#b960e4",
        "blueshadow": "#b960e4"
      },
    },
    screens: {
      tablet: {
        max: "1200px"
      }
    }
  },
  plugins: [],
}

