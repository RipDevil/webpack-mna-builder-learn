const path = require('path');
const { loader: miniCssLoader } = require('mini-css-extract-plugin');

const {
  webpaklib: { plugins },
} = require('./lib');

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode,
  plugins,

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[contenthash].hash.js',
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
      {
        test: /\.css$/i,
        use: [miniCssLoader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  // Development
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
