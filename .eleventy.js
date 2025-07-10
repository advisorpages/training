module.exports = function(eleventyConfig) {
  return {
    pathPrefix: "/training/",  // ← This is the key fix
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
