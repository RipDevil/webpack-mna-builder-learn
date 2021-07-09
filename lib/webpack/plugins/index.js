const { ProgressPlugin } = require('webpack');

const cleanWebpackPlugin = require('./clean-webpack.plugin'); // must be at the top
const miniCssExtractPlugin = require('./mini-css-extract.plugin');
const htmlWebpackPlugin = require('./html-webpack.plugin');

const progressPlugin = new ProgressPlugin();

module.exports = [
  progressPlugin,
  cleanWebpackPlugin,
  miniCssExtractPlugin,
  htmlWebpackPlugin,
];
