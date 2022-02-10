const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
        assetModuleFilename: 'assets/images/[hash].[ext][query]',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@logos': path.resolve(__dirname, 'src/assets/images/logos'),
            '@icons': path.resolve(__dirname, 'src/assets/images/icons'),
        }
    },
    module: {
        rules: [
            // Tipo de archivos a trabajar
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // Para cargar el HTML
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            // Regla para importar imagenes
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            },
            // Regla para el css
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new Dotenv(),
    ],
}