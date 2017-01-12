
const path = require('path');
const webpack = require('webpack');

const sourceDir = path.join(__dirname, 'src');
const testDir = path.join(__dirname, 'tests');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [{
            test: /\.js$/,
            include:[
                sourceDir,
                testDir
            ],
            loader: 'babel-loader'
        }]
    },
    resolve: {
        modules: [
            'src',
            'node_modules'
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dom-events.js',
    }
};