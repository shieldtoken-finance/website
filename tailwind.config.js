module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#fe9601",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
