/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#E8F3F3",
        "bold-regal": "#00AAA1",
        grey: "#777777",
        black: "#222222",
      },
    },
  },
  plugins: [],
};
