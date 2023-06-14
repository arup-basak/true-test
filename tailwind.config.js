/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '0px',
      'tablet': '670px',
      'desktop': '1000px'
    },
  },
  plugins: [],
}