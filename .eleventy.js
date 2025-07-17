const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("date", (value, format = "LLL dd, yyyy") => {
    return DateTime.fromJSDate(value, { zone: "utc" }).toFormat(format);
  });

  return {
    dir: {
      input: ".",
      output: "_site_local",
      includes: "_includes",
    },
  };
};
