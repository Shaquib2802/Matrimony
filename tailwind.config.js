/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        doto: ['Doto', 'sans-serif'],
      },
        colors: {
        primary: "#3498db", // Custom blue
        secondary: "#2ecc71", // Custom green
      },},
  },
  plugins: [],
}

