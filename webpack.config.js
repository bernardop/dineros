var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.join(__dirname);
var SRC_PATH = path.join(ROOT_PATH, 'src');

process.env.BABEL_ENV = TARGET;

var common = {
  entry: SRC_PATH,
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.join(ROOT_PATH, 'build')
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: [
          SRC_PATH
        ]
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'],
        include: [
          /flexboxgrid/
        ]
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: SRC_PATH
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dineros',
      template: 'src/index.html',
      inject: 'body'
    }),
    new LodashModuleReplacementPlugin
  ]
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
