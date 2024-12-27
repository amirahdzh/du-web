/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2c3e50", // Warna utama
        secondary: "#f39c12", // Warna aksen
        neutral: "#ecf0f1", // Warna netral
      },
    },
  },
  plugins: [],
};

