/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{md,html,njk}",
    "./_includes/**/*.{html,njk}",
    "./_data/**/*.{json,js}",
    "./_site/**/*.html" // Optional: only needed if rendering happens in post-processing
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // 👈 add this if you're using `.prose`
  ],
}
