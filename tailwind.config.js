/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        main: {
          dark: "#26334E",
          light: "#313A52",
          text: "#CCCCCC",
          card: "#36475F",
          button: "#4C586C",
        },
      },
    },
  },
  plugins: [],
};
