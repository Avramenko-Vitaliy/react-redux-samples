const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        'react-hot-loader',
        './src/index.js',
    ],
    watchOptions: {
        poll: 1000,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};
