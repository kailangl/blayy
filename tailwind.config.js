/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bluebg": "#281e28",
        "blueborder": "#ffffff",
        "bluetext": "#9d18e8",
        "blueshadow": "#3a194c"
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

