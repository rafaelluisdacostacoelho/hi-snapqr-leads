module.exports = {
  content: [
    "./src/**/*.{html,ts,js,css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C026D3",
        secondary: "#6D28D9",
        accent: "#3B82F6"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      scale: {
        '102': '1.01'
      }
    },
  },
  plugins: [],
};
