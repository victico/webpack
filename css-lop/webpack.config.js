const path = require('path');

module.exports ={
	entry: "./css-lop/index.js",
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
					'style-loader',
					'css-loader'
				]
			}
		]
	}
}