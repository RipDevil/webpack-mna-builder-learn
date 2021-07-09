const path = require('path');
const { loader: miniCssLoader } = require('mini-css-extract-plugin');

const {
  webpaklib: { plugins },
} = require('./lib');

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode,
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'gibberish.js',
    assetModuleFilename: 'images/[hash][ext][query]',
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

  plugins,

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
