const HtmlWebpackPlugin = require('html-webpack-plugin');

const opts = {
  title: 'MNA WEBPACK',
  template: './src/index.html',
  minify: false,
  hash: true,
};

module.exports = new HtmlWebpackPlugin(opts);
