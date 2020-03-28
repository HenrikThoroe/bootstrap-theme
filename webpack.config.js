const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('./styles/index.css');

module.exports = {
    mode: "production",
    entry: "./src/styles/exports.scss",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: extractCSS.extract([
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ])
            }
        ]
    },
    plugins: [
        extractCSS
    ],
    resolve: {
        extensions: [ '.scss', '.sass', '.css' ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    }
}