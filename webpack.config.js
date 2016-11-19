var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + '/assets/dist',
        publicPath: '/assets/dist',
        filename: 'bundle.js'
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

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}