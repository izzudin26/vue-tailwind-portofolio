const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.lightBlue,
      secondary: colors.blue,
      gray: colors.gray,
      white: colors.white,
      purples: "#5000CA",
      black: colors.black,
      red: colors.red
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "1024px",
      lg: "1280px"
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
