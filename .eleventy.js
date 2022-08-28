const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function(config) {

	config.addPlugin(rssPlugin);

  config.addFilter('readableDate', (value) => {
        return value.toLocaleString('en', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    });

  config.addCollection('postsReversed', function(collection) {
    return collection.getFilteredByTag('post').reverse();
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    passthroughFileCopy: true,
    templateFormats: [
            'md',
            'njk',
        ],
  }
};
