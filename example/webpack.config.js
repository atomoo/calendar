const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './app.tsx'),
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
            },
        ],
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hot: true,
        host: '0.0.0.0',
        port: '8777',
        historyApiFallback: true,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        stats: 'minimal',
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, './index.html'),
            }
        ),
    ],
};