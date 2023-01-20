const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
	entry: "./plugins/index.js",
	mode: 'development',
	output:{
		path: path.resolve(__dirname, 'dist'),
		filename : 'bund.js'
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
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title :'Pruebas'
		}),
		new MiniCSSExtractPlugin({
			filename: 'dist/index.css'
		})
	]
}