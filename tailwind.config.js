module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      joe: ["Josefin Sans", "sans-serif"],
      logo: ["Pacifico", "cursive"],
      robo: ["Roboto", "sans-serif"],
    },
    extend: {
      spacing: {
        "30%": "30%",
        "70%": "70%",
      },
      colors: {
        grad:{
        low: "",
        high: ""
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
