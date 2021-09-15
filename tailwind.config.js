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
      colors: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
