'use strict';
const path = require('path');

module.exports = {
  entry: {index: './src/index.js'},
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './', 'dist'),
    libraryExport: "default",
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: '_'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
    ]
  }
};