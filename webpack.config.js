const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

require('dotenv').config();

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				include: /node_modules\/antd/,
				use: [
					require.resolve('style-loader'),
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
						},
					},
				],
			},
			{
				test: /\.(?:le|c)ss$/,
				exclude: /node_modules/,
				use: [
					require.resolve('style-loader'),
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: require.resolve('less-loader'),
						options: {
							importLoaders: 1,
							javascriptEnabled: true,
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
						},
					},
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
	},
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		historyApiFallback: true,
		port: process.env.PORT || 9000,
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
	],
};
