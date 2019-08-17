const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// For Typescript
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV,
	entry: {
		// For Typescript
		'js/app': ['./src/App.tsx']
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/'
	},
	module: {
		rules: [
			// For Typescript
			{
				test: /\.(ts|tsx)$/,
				use: [
					'babel-loader',
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true
						}
					}
				],
				exclude: /node_modules/
			},
			{
				// write image files under 10k to inline or copy image files over 10k
				test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							fallback: 'file-loader',
							name: 'images/[name].[ext]'
						}
					}
				]
			},
			{
				// write files under 10k to inline or copy files over 10k
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							fallback: 'file-loader',
							name: 'fonts/[name].[ext]'
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html'
		}),
		// For typescript
		new ForkTsCheckerWebpackPlugin({ silent: true })
	],
	devServer: {
		contentBase: './dist',
		port: 3000,
		historyApiFallback: true
	}
};
