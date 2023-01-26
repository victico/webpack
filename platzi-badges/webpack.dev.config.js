const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports ={
	entry: {
		app: path.resolve(__dirname,'src/index.js'),
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'js/[name].js',
		publicPath: 'http://localhost:9000/',
		chunkFilename: 'js/[id].[chunkhash].js'
	},
	devServer: {
        contentBase: path.resolve(__dirname,'dist'),
		hot: true,
		open: true,
		port: 9000
	},
	module: {
		rules:[
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				]
			},
			{
				test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webp$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'assets/'
					}
				}
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname,'public/index.html')
		}),
        new webpack.HotModuleReplacementPlugin(),

	],
}