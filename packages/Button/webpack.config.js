/* eslint-disable camelcase */

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function getPath() {
  return path.resolve(__dirname, ...arguments);
}

const filename = 'react/[name].js';
const chunkFilename = 'react/async/[name].js';

module.exports = {
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist/'),
    chunkFilename,
    publicPath: '/',
    library: '@gg/Button',
    libraryTarget: 'window',
    // will name the AMD module of the UMD build
    umdNamedDefine: true,
    filename,
    pathinfo: true
  },

  externals: {
    'react': 'react'
  },

  entry: {
    Button: './src/index.js'
  },

  devtool: 'inline-source-map',

  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          babelrcRoots: ['.', '../', '../../']
        }
      }]
    },
    {
      test: /\.scss$/,
      use: ['ignore-loader']
    }],
  },

  optimization: {
    minimize: false,
    minimizer: [new UglifyJsPlugin({
      parallel: true,
      cache: true,
      uglifyOptions: {
        compress: {
          dead_code: true
        },
        output: {
          comments: false
        },
        sourceMap: false,
        minimize: true
      }
    })]
  },

  plugins: [
    new webpack.HashedModuleIdsPlugin()
  ],

  stats: {
    children: false,
    reasons: false
  }
};
