const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './app/index.ts',
        vendors: ['zone.js', 'reflect-metadata']
    },
    output: {
        filename: '[name].js?[hash]',
        publicPath: './',
        path: './dist'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /\.tsx?$/,
                enforce: "pre",
                loader: "tslint-loader"
            },
            {
                test: /\.tsx?$/,
                include: /app/,
                use: { loader: 'awesome-typescript-loader' }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Angular2',
            template: 'app/index.html',
            chunksSortMode: (a, b) => a.names[0] > b.names[0] ? -1 : 1
        })
    ],
    watch: true,
    devtool: 'source-map'
};