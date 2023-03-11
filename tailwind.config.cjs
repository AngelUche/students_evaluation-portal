/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg_img": "url('../src/assets/login.jpg')",
      },
      boxShadow: {
        "pry": "0 4px 6px -1px rgba(6 40 99 / 0.1), 0 2px 4px -2px rgb(6 40 99 / 0.1)"
      }
    },
  },
  plugins: [],
};
