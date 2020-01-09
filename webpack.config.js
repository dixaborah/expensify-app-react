const path = require('path')
const MiniCssExtract = require('mini-css-extract-plugin')

module.exports = (env) => {

    const isProduction = env === 'production'

    return {
        plugins: [new MiniCssExtract({
            filename: 'styles.css'
        })],
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'public', 'dist'),
            filename: 'app.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },{
                test: /\.s?css$/,
                use: [{
                    loader: MiniCssExtract.loader,
                    options: {
                        publicPath: '/public'
                    },
                },{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },{
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            }]
        },
        devtool: isProduction ? 'source-map' : 'inline-cheap-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}