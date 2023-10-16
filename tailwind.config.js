/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bluebg": "#242B3C",
        "blueborder": "#8CA6E9",
        "bluetext": "#A1B1FE",
        "blueshadow": "#1C3362"
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

