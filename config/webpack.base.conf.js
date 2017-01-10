var path = require('path');
var settings = require('./webpack.settings');
var utils = require('./utils');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var env = process.env.NODE_ENV
// var cssSourceMapDev = (env === 'development' && settings.dev.cssSourceMap)
// var cssSourceMapProd = (env === 'production' && settings.build.productionSourceMap)
// var useCssSourceMap = cssSourceMapDev || cssSourceMapProd


// var bulba = require('bulma');
// console.log(bulma);
console.log(path.resolve(__dirname + '/../node_modules/bulma'));

module.exports = {
    entry: {
        app: './client/app.js'
    },
    output: {
        path: './build/public',
        filename: '/scripts/[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.json'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            // 'src': path.resolve(__dirname, '../src'),
            // 'assets': path.resolve(__dirname, '../src/assets'),
            // 'components': path.resolve(__dirname, '../src/components')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        },{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        },{
            test: /\.json$/,
            loader: 'json'
        },{
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        },{
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname + '/../node_modules/bulma')
        ]
    },
    vue: {
        loaders: {
            scss: ExtractTextPlugin.extract('style', '!css!sass')
        },
    },
    plugins: [
        new ExtractTextPlugin("styles/styles.css")
    ]
}
