const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');

const plugins = [
  autoprefixer,
  postcssPresetEnv({
    stage: 1,
    preserve: true,
    features: {
      'custom-properties': true,
    },
  }),
];

const isDev = process.env.ELEVENTY_ENV === 'development';

if (!isDev) {
  const cssnano = require('cssnano');

  [].push.apply(plugins, [
    cssnano({
      preset: 'default',
    }),
  ]);
}

module.exports = { plugins };
