/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        radial: "radial-gradient(circle, var(--tw-gradient-stops))",
        conic: "conic-gradient(from 0deg, var(--tw-gradient-stops))",
      },
      keyframes: {
        expandWidth: {
          "0%": { width: "0%" },
          "100%": { width: "102%" },
        },
      },
      animation: {
        expandWidth: "expandWidth 1s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
