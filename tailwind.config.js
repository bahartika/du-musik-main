/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/hero.png')",
        vinyl: "url('/src/assets/bg vinyl.png')",
        pita: "url('/src/assets/bg pita.png')",
        cd: "url('/src/assets/bg-cd.png')",
      },
    },
  },
  plugins: [],
};
