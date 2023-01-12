/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Dark-blue': '#1E0E62',
        'Under-gray': '#151439',
        'Teal': '#25DAC5',
      }
    },
  },
  plugins: [],
}