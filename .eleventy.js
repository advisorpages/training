const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // 🔹 Add a custom date filter using Luxon
  eleventyConfig.addFilter("date", (value, format = "LLL dd, yyyy") => {
    return DateTime.fromJSDate(value, { zone: "utc" }).toFormat(format);
  });

  return {
    dir: {
      input: ".",
      output: "_site", // GitHub Pages uses this
      includes: "_includes",
      layouts: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
