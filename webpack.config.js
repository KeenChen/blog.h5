'use strict';

var path = require('path')
var webpack = require('webpack')
var versionConfig = require('./version.js');
var isDebug = versionConfig.DEBUG;

console.log(`version info: ${JSON.stringify(versionConfig)}`);

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
};

var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: isDebug
            }
        });

if (process.env.NODE_ENV === 'production') {
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            },
            DEBUG: versionConfig.DEBUG,
            PRODUCTION: !versionConfig.DEBUG,
            VERSION: versionConfig.VERSION_CODE,
            VERSION_NAME: versionConfig.VERSION_NAME
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
            },

            DEBUG: versionConfig.DEBUG,
            PRODUCTION: !versionConfig.DEBUG,
            VERSION: versionConfig.VERSION_CODE,
            VERSION_NAME: versionConfig.VERSION_NAME
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