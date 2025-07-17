/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.md",
    "./*.html",
    "./_includes/**/*.{html,njk}",
    "./_site/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
