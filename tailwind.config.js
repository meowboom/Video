/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-main": "#DE4815",
        "primary-bg": "#70147A",
        "primary-hover": "#FAD480",
        "secondary-green": "#16E783",
        "secondary-yellow": "FFF500",
      },
    },
  },
  plugins: [],
};
