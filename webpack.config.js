const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('styles.css');

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: extractCSS.extract([
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ])
            }, 
            {
                test: /\.ts/i,
                use: [
                    "ts-loader"
                ]
            }
        ]
    },
    plugins: [
        extractCSS
    ],
    resolve: {
        extensions: [ '.scss', '.sass', '.css', '.js', '.ts', '.json' ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    }
}