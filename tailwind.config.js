/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#2c3e50", // Warna utama
        primary: "#ffffff",
        textColor: "#2c3e50", // Warna teks
        secondary: "#f39c12", // Warna aksen
        neutral: "#ecf0f1", // Warna netral
        hoverYellow: '#FFC107', // warna hover kustom
      },
    },
  },
  plugins: [],
};

