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
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist/'),
    chunkFilename,
    publicPath: 'atomic-poc/',
    libraryTarget: 'umd',
    // will name the AMD module of the UMD build
    umdNamedDefine: true,
    filename,
    pathinfo: true
  },

  entry: {
    main: path.resolve('src', 'index.js')
  },

  externals: {
    '@gg/Button': '@gg/Button'
  },

  devtool: '',

  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, './src/')
      ],
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
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
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
    new webpack.HashedModuleIdsPlugin({
      context: './src'
    })
  ],

  stats: {
    children: false,
    reasons: false
  }
};
