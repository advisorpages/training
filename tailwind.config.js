module.exports = {
  content: [
    "./*.md",
    "./**/*.md",
    "./_includes/**/*.njk",
    "./_layouts/**/*.njk"
    // You can add HTML patterns if you ever author HTML directly.
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
