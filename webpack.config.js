var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './app'
	},
	output: {
		path: './build',
		filename: '[name].js'
	},
	module: {
		loaders: [
			// if partial.pug doesn't have a mixin,
			// breaks with:
			// Module parse failed: /path/to/pug-loader--bug/app/partial.pug Unexpected token (1:3)
			//You may need an appropriate loader to handle this file type.

			// {
			// 	test: /\.pug$/,
			// 	loader: 'pug'
			// }
			// adding ^ loader solves that
		]
	},
	devServer: {
		historyApiFallback: true,
		inline: true,
		stats: 'errors-only'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: '!!pug!./app/index.pug'
		})
	]
};
