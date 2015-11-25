'use strict';
var webpack = require('webpack');
var path = require('path');

var APP = __dirname + '/app';

module.exports = {
	context: APP,
	entry: [
		'bootstrap/less/bootstrap.less',
		'./styles.less',
		'./core/bootstrap.js',
	],
	output: {
		path: APP,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			// these are needed to load bootstrap assets
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },

      // less files
			{ test: /\.less$/, loader: "style!css!autoprefixer!less" },

			// js files
			{
				test: /\.js$/,
				loader: "jshint",
				exclude: /node_modules|bower_components/,
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules|bower_components/,
				query: {
					presets: ["es2015"]
				}
			}
		]
	}
};
