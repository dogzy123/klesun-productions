const path = require('path');

const HtmlWebpackPlugin =  require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry : './src/index.js',

    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'kp.js',
        publicPath: './',
    },

    mode: 'development',

    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use: ['style-loader', 'css-loader']},
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]-[local]',
                            }
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader",
            }
        ]
    },

    plugins : [
        new MiniCssExtractPlugin(),

        new HtmlWebpackPlugin ({
            template : 'public/index.html'
        })
    ]
}
