const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
	entry: {
		home: path.resolve(__dirname,'src/js/index.js'),
	},
	mode: 'development',
	output:{
		path: path.resolve(__dirname,'dist'),
		filename: 'js/[name].js'
	},
	module: {
		rules:[
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader
					},
					'css-loader'
				]
			},
			/*{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			}*/
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title :'Pruebas'
		}),
		new MiniCSSExtractPlugin({
			filename: 'css/[name].css'
		})
	]
}