const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: "./fe-sprint-my-agora-states/js/index.js",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "fe-sprint-my-agora-states", "index.html")
    })
    ]
}