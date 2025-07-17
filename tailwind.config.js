/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,njk,md}",           // ✅ recursively scan ALL folders
    "./_data/**/*.{json,js}"          // ✅ if you store class names in data
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // ✅ for `.prose` styling
  ],
}
