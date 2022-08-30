const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function(config) {
  config.addPlugin(rssPlugin);

  return {
    dir: {
      input: 'src',
      output: 'public',
      layouts: 'layouts',
      includes: 'layouts/includes',
      data: 'data',
    },
    passthroughFileCopy: true,
    templateFormats: [
      'md',
      'njk',
    ],
  };
}
