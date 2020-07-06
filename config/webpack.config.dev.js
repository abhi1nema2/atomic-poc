/* eslint-disable camelcase */

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

function getPath() {
  return path.resolve(__dirname, ...arguments);
}

const filename = 'react/[name].js';
const chunkFilename = 'react/async/[name].js';

module.exports = {
  mode: 'production',
  output: {
    path: path.join(__dirname, './dist/'),
    chunkFilename,
    publicPath: '/',
    library: '[name]',
    libraryTarget: 'window',
    // will name the AMD module of the UMD build
    umdNamedDefine: true,
    filename,
    pathinfo: true
  },

  entry: {
    react: 'react',
    runtime: path.resolve('src', 'index.js')
  },

  devtool: 'inline-source-map',

  optimization: {
    splitChunks: {
      automaticNameDelimiter: '_',
      cacheGroups: {
        'default': false,
        'vendors': {
          name: 'vendor',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom|)[\\/]/,
          enforce: true
        },
        styles: {
          test: /\.(css|scss|less)$/,
          enforce: true // force css in new chunks (ignores all other options)
        }
      }
    },
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
    }),
    new OptimizeCssAssetsPlugin({})]
  },

  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000
  },

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
        path.resolve(__dirname, '../src/')
      ],
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }]
    },
    {
      test: /\.scss$/,
      use: [
        { loader: MiniCssExtractPlugin.loader, options: { esModule: true }},
        'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    }],
  },

  externals: {
    '@gg/Button': '@gg/Button'
  },

  plugins: [
    new MiniCssExtractPlugin({
      moduleFilename: ({ name }) => `${name.replace('/js/', '/css/')}.css`
    }),
    new HtmlWebpackPlugin({
      template: path.resolve( __dirname, '../public/index.html' ),
      filename: 'index.html',
      inject: 'head',
      scriptLoading: 'defer'
   }),

    new webpack.HashedModuleIdsPlugin()
  ],

  stats: {
    children: false,
    reasons: false
  }
};
