/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#09344F",
        secondary: "#283930",
        buttons: "#E07F09",
        darkbrown: {
          eerie: "#3A0E01",
          light: "#E4CC99",
        },
      },
      fontFamily: {
        libre: ["'Libre Baskerville'", "serif"],
        roboto: ["'Roboto'", "sans - serif"],
        pacifico: ["'Pacifico'", "cursive"],
        dancing: ["'Dancing Script'", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
