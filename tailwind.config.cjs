/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg_img": "url('./src/assets/coridor.jpg')",
        login: "url('./src/assets/login.jpg')",
      },
      boxShadow: {
        pry: "0 2px 3px -1px rgba(6 40 99 / 0.1), 0 2px 2px -2px rgb(6 40 99 / 0.1)",
      },
      fontFamily: {
        arial: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        mono: "monospace",
      },
      colors: {
        pry: "#03256c",
        prylg: "#0a369d",
        sideNavbg: "#0b3142",
        danger: "#d9534f",
        studentactive: "#947154",
        studntnotactive: "#AB6715",
        formFieldBg: "#eeeeee",
        editFormFieldBg: "#ffffff"
      },
    },
   
  },
  plugins: [],
};
