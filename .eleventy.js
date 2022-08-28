module.exports = function(config) {

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
    markdownTemplateEngine: 'ejs',
    templateFormats: [
            'md',
            'ejs',
        ],
  }
};
