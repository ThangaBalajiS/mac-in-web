var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react','env']
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
              }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    mode:'development',
    watch: true
};