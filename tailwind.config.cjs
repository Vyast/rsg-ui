/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
