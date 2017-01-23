const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './app/index.ts',
        vendors: [
            'rxjs',
            'zone.js',
            'reflect-metadata'
        ]
    },
    output: {
        filename: '[name].js?[hash]',
        publicPath: './',
        path: './dist'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /\.ts$/,
                enforce: "pre",
                loader: "tslint-loader"
            },
            {
                test: /\.ts$/,
                include: /app/,
                loader: 'awesome-typescript-loader'
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