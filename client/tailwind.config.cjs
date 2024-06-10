/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Reddit Mono, monospace;",
      },
    },
    animation: {
      slideUpAndIn: "slideUpAndIn 1s ease-out ",
    },
    keyframes: {
      slideUpAndIn: {
        from: { transform: "translateY(100%)", opacity: "0" },
        to: { transform: "translateY(0)", opacity: "1" },
      },
    },
  },
  plugins: [],
};
