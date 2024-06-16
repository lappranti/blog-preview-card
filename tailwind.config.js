/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree"],
      },
      boxShadow: {
        dur: "8px 8px 0 0 rgba(0, 0, 0, 1)",
        "dur-lg": "16px 16px 0 0 rgba(0, 0, 0, 1)",
      },
      colors: {
        primary: "#F4D04E",
      },
    },
  },
  plugins: [],
};
