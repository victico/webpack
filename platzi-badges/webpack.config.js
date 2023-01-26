const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports ={
	entry: {
		app: path.resolve(__dirname,'src/index.js'),
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'js/[name].js',
		publicPath: 'http://localhost:3001/',
		chunkFilename: 'js/[id].[chunkhash].js'
	},
	module: {
		rules:[
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader,
					},
					'css-loader'
				]
			},
			{
				test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webp$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1000,
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
		new MiniCSSExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[id].css'
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname,'public/index.html')
		}),
		new webpack.DllReferencePlugin({
			manifest: require('./modules-manifest.json')
		}),
		new AddAssetHtmlPlugin({
			filepath: path.resolve(__dirname,'dist/js/*.dll.js'),
			outputPath: 'js',
			publicPath: 'http://localhost:3001/js'
		})
	],
	/*optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 0,
			name: 'pepita'
		}
	}*/
}