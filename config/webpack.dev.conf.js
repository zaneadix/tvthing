var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var utils = require('./utils');
var settings = require('./webpack.settings');
var baseWebpackConfig = require('./webpack.base.conf');

// add hot-reload related code to entry chunks
// Object.keys(baseWebpackConfig.entry).forEach(function (name) {
//     baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
// })

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: settings.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': settings.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true
    // })
  ]
})
