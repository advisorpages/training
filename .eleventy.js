const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  // 🧩 Register plugin
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_includes",
      output: "_site"
    }
  };
};
