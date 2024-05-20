/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "bounce-card": {
          "0%": {
            marginTop: "20vh",
          },
          "50%": {
            marginTop: "18vh",
          },
          "100%": {
            marginTop: "20vh",
          },
        },
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        "bounce-card": "bounce-card 3s infinite",
      },
      boxShadow: {
        all: "0 0px 10px 0px var(--tw-shadow-color)",
      },
      colors: {
        "primary-main": "#DE4815",
        "primary-bg": "#70147A",
        "primary-hover": "#FAD480",
        "secondary-green": "#16E783",
        "secondary-yellow": "#FFF500",
      },
    },
  },
  plugins: [],
};
