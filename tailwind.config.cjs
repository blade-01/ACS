/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#8F008F",
        secondary: '#FF6633',
        priBg: "#F5E6FE",
        priText: "#999999",
        darkBg: '#1E1E2E',
        darkBgSec: '#27293D'
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"]
      },
      fontSize: {
        nl: ["56px", "64px"],
      },
      screens: {
        "2xs": "200px",
        "1xs": "350px",
        "1xl": "1400px",
        "3xl": "2000px",
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
