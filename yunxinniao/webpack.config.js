var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 
module.exports = {
    // devtool: "source-map",
    entry:  {  
      vendor: ['react','react-router'],
      bundle: './src/'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash:20].js",
        // 热更新时需要注释下面一行
        publicPath: "./"
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, use: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015'] },
            { test: /\.scss$/, use: ExtractTextPlugin.extract({fallback: "style-loader", use:"css-loader?sourceMap!sass-loader"})},
            { test: /\.(png|jpg)$/, use: 'url-loader?limit=25000' }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin( { filename: 'style.[hash:20].css', allChunks: true }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
};
