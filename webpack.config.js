const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/scripts/index.js'
    },
    devtool: false,
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    },
                    'sass-loader?sourceMap'
                ]
            },
            {
                test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
        new HtmlWebpackPlugin({
            template: 'src/sites/index.html',
            inject: 'body',
            xhtml: true,
            favicon: 'favicon.ico',
            metadata: {
                isDevServer: false
            },
            minify: {
                caseSensitive: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            },
            chunks: 'all',
            filename: 'index.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[chunkhash].bundle.js',
        sourceMapFilename: '[file].map',
        chunkFilename: '[name].[chunkhash].chunk.js'
    }
};
