const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.ELEVENTY_ENV === 'development';

module.exports = {
  entry: [
    path.resolve(__dirname, 'src', 'css', 'style.css'),
  ],
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
  },

  optimization: {
    minimize: !isDev,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ]},

    plugins: [
    new MiniCssExtractPlugin({ filename: `style.css` }),
  ],
};
