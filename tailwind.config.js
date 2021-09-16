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
      boxShadow: {
        nav: "0 2px 2px 0 rgba(0, 0, 0, 0.05)",
      },
      spacing: {
        "30%": "30%",
        "70%": "70%",
        "500p": "500px",
        "550p": "550px",
        "600p": "600px",
      },
      colors: {
        grad: {
          low: "",
          high: "",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
