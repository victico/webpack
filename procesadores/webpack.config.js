const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
	entry: {
		home: path.resolve(__dirname,'src/js/index.js'),
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'js/[name].js'
	},
	/*devServer: {
		hot: true,
		open: true,
		port: 9000
	},*/
	module: {
		rules:[
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					'postcss-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			{
				test: /\.styl$/,
				use: [
					'style-loader',
					'css-loader',
					'stylus-loader'
				]
			},
			{
				test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webp$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 900000,
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
			title :'Pruebas',
			template: path.resolve(__dirname,'index.html')
		}),
	]
}