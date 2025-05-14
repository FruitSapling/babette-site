module.exports = function(eleventyConfig) {
  // Add 'projects' collection based on Markdown files in /src/projects/
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/projects/*.md");
  });

  // Copy the admin folder for Decap CMS (Netlify CMS)
  eleventyConfig.addPassthroughCopy("src/admin");

  // Copy the images folder (or any static assets)
  eleventyConfig.addPassthroughCopy("src/img");

  // Copy the styles file
  eleventyConfig.addPassthroughCopy("src/styles.css");


  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
