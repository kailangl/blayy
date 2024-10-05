/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bluebg": "#16131B",
        "blueborder": "#9DAEE5",
        "bluetext": "#CFA6FF",
        "vipshadow": "#fff563",
        "vipborder": "#ffaf03",
        "blueshadow": "#1C3468"
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

