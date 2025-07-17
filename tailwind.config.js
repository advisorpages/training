/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",     // Your static HTML files
    "./**/*.njk",      // Nunjucks templates
    "!./_site{,/**}",  // exclude _site and everything inside
    "!./node_modules{,/**}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
