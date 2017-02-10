'use strict';

var path = require('path')
var webpack = require('webpack')
// var PrerenderSpaPlugin = require('prerender-spa-plugin')
var isDebug = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {
        app: ['./app.js']
    },
    output: {
        path: __dirname + '/statics/assets/dist/',
        publicPath: '/assets/dist/',
        filename: `${isDebug? 'dev.': ''}[name].bundle.js`
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$$/,
                exclude: /node_modules/,
                loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: [
                        'es2015',
                        require.resolve('babel-preset-es2015'),
                        require.resolve('babel-preset-stage-0')
                    ]
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue'
        }
    },
    
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'
}

// var preerenderPlugin = new PrerenderSpaPlugin(
//       // Absolute path to compiled SPA
//       path.join(__dirname, './assets/dist'),
//       // List of routes to prerender
//       [ '/', '/post']
//     );

var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        });

if (process.env.NODE_ENV === 'production') {
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        uglifyJsPlugin
        ,
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    ])
}

if (process.env.NODE_ENV === 'development') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
        ,
        uglifyJsPlugin
        ,
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    ])
}