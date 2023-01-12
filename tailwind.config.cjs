/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Ds: "DM Sans",
    },
    extend: {
      colors: {
        "Dark-blue": "#1E0E62",
        "Under-gray": "#151439",
        Teal: "#25DAC5",
        Action: "#E93A7D",
      },
    },
  },
  plugins: [],
};
