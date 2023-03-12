/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg_img": "url('../src/assets/coridor.jpg')",
      },
    },
  },
  plugins: [],
};
