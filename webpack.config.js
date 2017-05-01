const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

// https://github.com/webpack/webpack/issues/3460
const { CheckerPlugin } = require('awesome-typescript-loader');

const PROJECT_ROOT = path.join(__dirname, '.');

function root(p) {
	return path.join(PROJECT_ROOT, p);
}

module.exports = {

	target: 'web',

	entry: {
		'polyfills': root('./app/polyfills.ts'),
		'vendor': root('./app/vendor.ts'),
		'app': root('./app/main.ts')
	},

	resolve: {
		extensions: ['.ts', '.js', '.css'],
		modules: [
			root('./app'),
			root('./node_modules')
		]
	},

	output: {
		path: root('./dist/'),
		filename: 'js/[name].[hash].js',
		chunkFilename: 'js/[id].[hash].chunk.js'
	},

	module: {
		exprContextCritical: false,
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'awesome-typescript-loader',
						options: {
							configFileName: root('./tsconfig.json'),
							silent: true
						}
					},
					{ loader: 'angular2-template-loader'}
				]
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpe?g|gif)$/, 
				loader: 'file-loader'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader'
			}
		]
	},

	devServer: {
		port: 3000,
		historyApiFallback: true
	},

	plugins: [

		new CheckerPlugin(),

		new webpack.NoEmitOnErrorsPlugin(),

		new CleanObsoleteChunks(),

		new webpack.ContextReplacementPlugin(
			// The (\\|\/) piece accounts for path separators in *nix and Windows
			/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
			root('./src'), // location of your src
			{} // a map of your routes
		),

		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),

		new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
			mangle: false,
			sourceMap: false
		}),

		new HtmlWebpackPlugin({
			template: root('./index.html')
		})
	]
}