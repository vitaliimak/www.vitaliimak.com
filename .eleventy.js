const rssPlugin = require('@11ty/eleventy-plugin-rss');
const markdownIt = require('markdown-it');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function(config) {
  config.addPlugin(rssPlugin);
  config.addPlugin(syntaxHighlight);

  config.addPassthroughCopy({ 'src/images': 'images' });
  config.addPassthroughCopy({ "src/**/*.png": `images/posts` });
  config.addPassthroughCopy('src/CNAME');

  const md = markdownIt();
  const defaultRender = md.renderer.rules?.link_open || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };
  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const aIndex = tokens[idx].attrIndex('target');

    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank']);
    } else {
      tokens[idx].attrs[aIndex][1] = '_blank';
    }

    return defaultRender(tokens, idx, options, env, self);
  };
  config.setLibrary('md', md);

  config.addFilter('readableDate', (value) => {
      return value.toLocaleString('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    });

  config.addFilter('pageTags', (tags) => {
    const generalTags = ['post', 'posts'];

    return tags
      .toString()
      .split(',')
      .filter((tag) => {
        return !generalTags.includes(tag);
      });
  });

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
