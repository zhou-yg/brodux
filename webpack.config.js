const path = require('path');
const webpack = require('webpack');

module.exports = {

  entry: {
    index: path.join(__dirname, './src/index.js'),
  },
  output: {
    path: path.join(__dirname, './lib/'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
  ]
}
