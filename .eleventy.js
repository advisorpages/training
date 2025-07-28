module.exports = function (eleventyConfig) {
  return {
    dir: { input: ".", output: "_site", includes: "_includes", layouts: "_includes" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: "/training/", // <-- update to "/" if you switch to root domain!
  };
};
