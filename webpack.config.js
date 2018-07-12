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
                test: /\.scss$/,
                use: ["style-loader", "css-loader","sass-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader:"file-loader",
                options:{
                    name:'[path][name].[ext]'
                }
            }
        ]
    },
    mode:'development',
    watch: true
};